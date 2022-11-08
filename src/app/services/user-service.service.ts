import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of, switchMap, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = [];
  private loggedInUser?: User

  constructor(private http: HttpClient) {
    this.loggedInUser = undefined;
  }
  private url = "http://localhost:4200/api/"

  authenticateUser(username: string, password: string): Observable<User> {
    let body = {"username" : `${username}`, "password" : `${password}`};

  return this.http.post<User>(this.url + "login", body)
            .pipe(map(user => {
                this.loggedInUser = user;
                return user;
            }));
  }

  isLoggedIn(): boolean {
    return this.loggedInUser != undefined;
  }

  registerNewUser(user: User): Observable<number> {
    console.log("Inside registerNewUser function")
    let body = {"username" : `${user.username}`};

    let registerBody = {
      "firstName" : `${user.firstName}`,
      "lastName" : `${user.lastName}`,
      "dob" : `${user.dob}`,
      "email" : `${user.email}`,
      "phone" : `${user.phone}`,
      "username" : `${user.username}`,
      "password" : `${user.password}`
    }
    return this.http.post<number>(this.url + "accounts", body)
            .pipe(switchMap(count => {
                if(count == 0) {
                  return this.http.post<number>(this.url + "register", registerBody);
                }
                else {
                  return of(0);
                }
            }));
  }

  logout() {
    this.loggedInUser = undefined
  }

  // getLoginUserId(): number | undefined {
  //   return this.loggedInUser?.clientId;
  // }

  getLoginUserEmail(): string | undefined {
    return this.loggedInUser?.email;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("Error occured ", error.error.message)
    } else {
      console.error("Server error status code ", error.status, ' with text ', error.statusText)
      if (error.status == 406) {
        return throwError(() => 'Session timed out, lease login to get services')
      }
    }
    return throwError(() => 'Error occured please try again later')
  }

}
