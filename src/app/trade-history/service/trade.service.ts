import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TradeStock } from 'src/app/models/trade-stock';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  url: string = "http://localhost:8080/api/trades";
  constructor(private httpClient:HttpClient) { }

  getTrades(): Observable<TradeStock[]>{
    return this.httpClient.post<TradeStock[]>(this.url,
      {
        'clientId': 'HVL491'
      },
      {headers : new HttpHeaders({"Content-Type": "application/json"})})
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
