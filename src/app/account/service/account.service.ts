import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BankAccount } from 'src/app/models/bank-account';
import { AccountDetail } from 'src/app/models/AccountDetail';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "http://localhost:8080/api";
  
  constructor(private httpClient:HttpClient) { }
  
  getBankAccounts(): Observable<BankAccount[]>{
    return this.httpClient.post<BankAccount[]>(this.url+"/bankAccounts", 
      {
        'clientId': 'HVL491'
      },
      {headers : new HttpHeaders({"Content-Type": "application/json"})})
    .pipe(catchError(this.handleError));
  }

  addBankAccount(account_number: String, bank_name: String ): Observable<Number>{
    let max = 500000000;
    let min = 50000000;
    let balance = Math.floor(Math.random() * (max - min + 1)) + min;

    return this.httpClient.post<Number>(this.url+"/bankAccounts/addAccount", 
      {
        'clientId': 'HVL491',
        'account_number': account_number,
        'bank_name': bank_name,
        'balance': balance
      },
      {headers : new HttpHeaders({"Content-Type": "application/json"})})
    .pipe(catchError(this.handleError));
  }

  deleteBankAccount(account_number: String): Observable<Number>{
    return this.httpClient.post<Number>(this.url+"/bankAccounts/deleteAccount", 
    {
      'clientId': 'HVL491',
      'account_number': account_number,
    },
    {headers : new HttpHeaders({"Content-Type": "application/json"})})
  .pipe(catchError(this.handleError));
  }
  
  getAccountDetails(): Observable<AccountDetail>{
    return this.httpClient.post<AccountDetail>(this.url+"/accounts/getDetails", 
      {
        "username":"Ethan"
      },
      {headers : new HttpHeaders({"Content-Type": "application/json"})})
    .pipe(catchError(this.handleError));
  }

  getAccountFunds(): Observable<Number>{
    return this.httpClient.post<Number>(this.url+"/accounts/getFunds", 
      {
        'clientId': 'HVL491'
      },
      {headers : new HttpHeaders({"Content-Type": "application/json"})})
    .pipe(catchError(this.handleError));
  }

  addFunds(account_number: String, amount: Number){
    let body =  {
      'clientId': 'HVL491',
      'account_number': account_number,
      'amount': amount
    };
    console.log(body);
    return this.httpClient.post<string>(this.url+"/accounts/addFunds", body,{
      headers : new HttpHeaders({"Content-Type": "application/json"
    })})
    .pipe(catchError(this.handleError));
  }

  withDrawFunds(account_number: String, amount: Number){
    let body =  {
      'clientId': 'HVL491',
      'account_number': account_number,
      'amount': amount
    };
    console.log(body);
    return this.httpClient.post<string>(this.url+"/accounts/withdrawFunds", body,{
      headers : new HttpHeaders({"Content-Type": "application/json"
    })})
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
