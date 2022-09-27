import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankAccount } from '../models/bank-account';
import { bank_accounts } from '../models/mock-data';



@Component({
  selector: 'app-sell-trade',
  templateUrl: './sell-trade.component.html',
  styleUrls: ['./sell-trade.component.css']
})
export class SellTradeComponent implements OnInit {

  bank_accounts : BankAccount[] = bank_accounts;
  selected_bank_account!: BankAccount;

  maxQuantity:number = 0;
  dataClone : any;

  quantityError:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SellTradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
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
    if(! this.quantityError){
          this.dialogRef.close({security: this.data, sellQuantity: this.dataClone.quantity, bank_account: this.selected_bank_account})
    }
    }
  

}
