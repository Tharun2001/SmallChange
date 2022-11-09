import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { SecurityList } from 'src/app/models/securitylist';

@Injectable({
  providedIn: 'root'
})
export class SecuritiesService {

  url: string = "http://localhost:8080/api/securities";
  constructor(private httpClient:HttpClient) { }

  getSecurities(): Observable<SecurityList[]>{
    return this.httpClient.get<SecurityList[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else{
      console.error(`Backend returned code ${error.status}, `+`body was: ${error.error}`);
    }
    return throwError(() =>'Unable to contact service; please try again later.');
  };
}

