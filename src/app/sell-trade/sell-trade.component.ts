import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from '../account/service/account.service';
import { BankAccount } from '../models/bank-account';
import { bank_accounts } from '../models/mock-data';
import { SecurityHolding } from '../models/security-holding';
import { SellService } from './service/sell.service';



@Component({
  selector: 'app-sell-trade',
  templateUrl: './sell-trade.component.html',
  styleUrls: ['./sell-trade.component.css']
})
export class SellTradeComponent implements OnInit {

  bank_accounts!: BankAccount[];
  selected_bank_account!: BankAccount;

  maxQuantity:number = 0;
  dataClone : any;

  quantityError:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SellTradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SecurityHolding, public accountService: AccountService,
    public sellService: SellService) {}

  ngOnInit(): void {
    this.getBankAccounts();
    this.selected_bank_account = bank_accounts[0];
    this.quantityError = false
    this.maxQuantity = this.data.quantity;
    this.dataClone = Object.assign({},this.data)
    console.log(this.data,this.dataClone)


    var quantityField = document
      .getElementById('quantity')
      ?.addEventListener('change', (e) => {
        console.log(this.dataClone.quantity)
        this.validateQuantity()
      });


  }

  validateQuantity(){
    if (this.dataClone.quantity > this.maxQuantity || this.dataClone.quantity<=0) {

      this.quantityError = true

    }
    else {
      this.quantityError = false;

    }
  }

  close() {
    this.dialogRef.close()
  }

    sell(){
      this.validateQuantity()
      if(!this.quantityError){
        console.log(this.dataClone.sid, this.dataClone.quantity, this.dataClone.ltp);
            this.sellService.sellTrades(this.dataClone.sid, this.dataClone.quantity, this.dataClone.ltp)
            .subscribe({next: (res) => {
              console.log(res);
              this.dialogRef.close({security: this.data, sellQuantity: this.dataClone.quantity, bank_account: this.selected_bank_account})
            },
          error: (e) => {
        }});   
      }
    }
  
    getBankAccounts(){
      this.accountService.getBankAccounts().subscribe( { next: (bank_accounts) =>{
        this.bank_accounts = bank_accounts;
      }, error: (e) => {
      }})
    }
}
