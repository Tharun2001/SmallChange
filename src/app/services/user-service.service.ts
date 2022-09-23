import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = [
    new User(
      NaN,
      'testuser1@gmail.com',
      'Test',
      'User 1',
      'testuser1',
      'user1_123',
      new Date('1999-09-11'),
      '9876543210',
      3
    ),
    new User(
      NaN,
      'testuser1@gmail.com',
      'Test',
      'User 1',
      'testuser2',
      'user2_123',
      new Date('1999-09-11'),
      '9876543210',
      3
    )
  ]

  private loggedInUser?: User;

  constructor(private http: HttpClient) { }

  authenticateUser(username: string, password: string): Observable<boolean> {
    let user: User | undefined;
    user = this.users.find(u => u.username === username);
    console.log("User find =", user)
    if (user && user.password === password) {
      this.loggedInUser = user;
      return of(true);
    }
    else {
      return of(false);
    }
  }

  isLoggedIn(): boolean {
    return this.loggedInUser != undefined;
  }

  registerNewUser(user: User): Observable<User> {
    const existinUser = this.users.find(u => u.email === user.email || u.username === user.username);
    if (existinUser) {
      return throwError(() => 'User with this email/username already present')
    }
    this.users.push(user);
    return of(user)
  }

  logout() {
    this.loggedInUser = undefined
  }

  getLoginUserId(): number | undefined {
    return this.loggedInUser?.clientId;
  }

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
