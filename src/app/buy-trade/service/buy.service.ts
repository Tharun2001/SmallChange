import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  url: string = "http://localhost:8080/api/trades/transaction";
  constructor(private httpClient:HttpClient) { }

  buyTrade(sid: number, qty: number, price: number): Observable<Number>{
    return this.httpClient.post<Number>(this.url,
      {
        "clientId" : "HVL491",
        "trade_type": "B",
        "quantity": qty,
        "price": price,
        "s_id": sid
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
