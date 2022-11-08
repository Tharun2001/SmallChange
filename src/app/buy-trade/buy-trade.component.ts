import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from '../account/service/account.service';
import { SecurityList } from '../models/securitylist';
import { SellService } from '../sell-trade/service/sell.service';
import { BuyService } from './service/buy.service';

@Component({
  selector: 'app-buy-trade',
  templateUrl: './buy-trade.component.html',
  styleUrls: ['./buy-trade.component.css']
})
export class BuyTradeComponent implements OnInit {
  funds!: number;
  quantity:number = 0;
  dataClone : any;

  quantityError:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BuyTradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SecurityList, public accountService: AccountService,
    public buyService: BuyService) {}

  ngOnInit(): void {
    this.quantityError = false
    this.dataClone = Object.assign({},this.data)
    this.getAccountDetails();
    console.log(this.data,this.dataClone);
  }

  getAccountDetails(){
    console.log("emited")
    this.accountService.getAccountDetails().subscribe({ next: (account) => {
      this.funds = account.funds;
      console.log(account);
    }, error: (e) => {

    }})
  }

  validateQuantity(){
    if (this.quantity*this.dataClone.ltp > this.funds) {
      this.quantityError = true
    }
    else {
      this.quantityError = false;
    }
  }

  close() {
    this.dialogRef.close()
  }

  buy(){
    this.validateQuantity();
    console.log("funds", this.funds);
    console.log("cost", this.quantity*this.dataClone.ltp);
    if(!this.quantityError){
      console.log("buying...");
      console.log(this.dataClone);
      this.buyService.buyTrade(this.dataClone.sid, this.quantity, this.dataClone.ltp)
          .subscribe({next: (res) => {
            console.log(res);
            this.dialogRef.close({security: this.data, buyQuantity: this.quantity})
          },
        error: (e) => {
      }});   
    }
  }
}
