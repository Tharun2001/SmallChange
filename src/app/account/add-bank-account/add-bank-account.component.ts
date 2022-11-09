import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-bank-account.component.html',
  styleUrls: ['./add-bank-account.component.css']
})
export class AddBankAccountComponent implements OnInit {
  account_number!: String;
  bank_name!: String;
  bankNameError!: boolean;
  accountError!: boolean;
  existsError!: boolean;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private accountSerive: AccountService,public dialogRef: MatDialogRef<AddBankAccountComponent>) {}

  ngOnInit(): void {
  }

  confirm() {
    this.accountError = false;
    this.bankNameError = false;
    this.existsError = false;
    
    console.log(this.account_number, this.bank_name);
    if(this.account_number == null || this.account_number == ''){
      this.accountError = true;
      console.log("acct error.....");
      return;
    }

    if(this.bank_name == null || this.bank_name == ''){
      console.log("name error.....");
      this.bankNameError = true;
      return;
    }
    this.accountSerive.addBankAccount(this.account_number, this.bank_name)
    .subscribe( (res) => {
      console.log("response from server..");
        console.log(res);
        this.dialogRef.close({account_number: this.account_number,
          bank_name: this.bank_name});
    }, (e) =>{
        console.log("bank account error from server..");
        console.log(e)
        this.existsError = true;
    });

  }

  cancel(){
    this.dialogRef.close("Close");
  }

}
