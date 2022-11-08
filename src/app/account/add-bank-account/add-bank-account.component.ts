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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private accountSerive: AccountService,public dialogRef: MatDialogRef<AddBankAccountComponent>) {}

  ngOnInit(): void {
  }

  confirm() {
    if(this.account_number == null){
      this.accountError = true;
      return;
    }

    if(this.bank_name == null){
      this.bankNameError = true;
      return;
    }
    this.accountSerive.addBankAccount(this.account_number, this.bank_name)
    .subscribe( (res) => {
        console.log(res);
    }, (e) =>{

    });
    this.dialogRef.close({account_number: this.account_number,
    bank_name: this.bank_name});
  }

  cancel(){
    this.dialogRef.close("Close");
  }

}
