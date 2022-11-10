import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { Preference } from '../models/preference';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  url: string = "http://localhost:8080/api/";

  constructor(private httpClient:HttpClient) { }

  getPreference(): Observable<{username: String, purpose: String, risk: number, incomeCategory: String, lengthOfInvestment: String}>{
    return this.httpClient.post<{username: String, purpose: String, risk: number, incomeCategory: String, lengthOfInvestment: String}>(this.url + 'preference',
      {
        'username': `${localStorage.getItem('username')}`
      },
      {headers : new HttpHeaders({"Content-Type": "application/json"})})
    .pipe(catchError(this.handleError));
  }

  setPreference(preference: Preference): Observable<Preference>{

    let checkPreference = { "username" : `${localStorage.getItem('username')}`};
    let addPreference = { "username": preference.username, "purpose": preference.purpose, "risk": preference.risk, "incomeCategory": preference.incomeCategory, "lengthOfInvestment": preference.lengthOfInvestment }

    return this.httpClient.post<Preference>(this.url + "preference", checkPreference)
            .pipe(switchMap( value => {
              if(value == undefined) {
                return this.httpClient.post<Preference>(this.url + "addPreference", addPreference);
              } else {
                return this.httpClient.post<Preference>(this.url + "updatePreference", addPreference);
              }
            }));
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
