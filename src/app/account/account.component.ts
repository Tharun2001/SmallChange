import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BankAccount } from '../models/bank-account';
import { bank_accounts } from '../models/mock-data';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  FundForm: FormGroup = new FormGroup({});

  accountNumberForm = new FormControl('');
  selectedAccountNumber!: String;

  accountError!:String;
  amount!: number;
  amountError!: String;


  bank_accounts!: BankAccount[];
  clientId!: String;
  funds!: number;
  name!: String;
  selected!: String;
  dialogRef!: any;
  constructor(private accountService: AccountService,
    public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.FundForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0)]],
    })
    this.getAccountDetails();
    this.getBankAccounts();
    this.selected = 'funds';
  }

  toggleOption(option: String){
    this.selected = option;
    console.log("btn clicked ",option );
  }

  getBankAccounts(){
    this.accountService.getBankAccounts().subscribe( (bank_accounts) =>{
      this.bank_accounts = bank_accounts;
    }, (e) => {

    })
  }

  getAccountDetails(){
    this.accountService.getAccountDetails().subscribe({ next: (account) => {
      this.clientId = account.clientId;
      this.name = account.username;
      this.funds = account.funds;
      console.log(this.funds);
    }, error: (e) => {

    }})
  }

  addBankAccount(){
    this.dialogRef = this.dialog.open(AddBankAccountComponent, {
      data: {
        animal: 'panda',
      },
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.getBankAccounts();
      console.log(`Dialog result: ${result.bank_name} ${result.account_number}`); // Pizza!
    });

  }

  deleteBankAccount(account_number: any){
    this.accountService.deleteBankAccount(account_number).subscribe({ next: (result: any) => {
      this.getBankAccounts();
      console.log(`Dialog result: ${result}`); // Pizza!
    }, error: (e) => {
      console.log(e);
    }});
    console.log(account_number);
  }

  validateFundForm(){
    console.log("validation")
    if(this.FundForm.get('accountNumber')?.value == null){
      return false;
    }

    console.log(this.FundForm.get('amount')?.value > 0)
    if(this.FundForm.get('amount')?.value == null || this.FundForm.get('amount')?.value < 0){
      console.log("negative...")
      return false;
    }

    return true;
  }

  addFunds(){
    if(!this.validateFundForm()){
      this.FundForm.reset();
      return;
    }
    let account_number: string = this.FundForm.get('accountNumber')?.value;
    let amount: number = this.FundForm.get('amount')?.value;
    this.accountService.addFunds(account_number, amount).subscribe({
      next: (res) => {
          console.log(res);
          this.getAccountDetails();
      },
      error: () => {

      }
  });
    this.FundForm.reset();
  }

  withdrawFunds(){
    if(!this.validateFundForm()){
      this.FundForm.reset();
      return;
    }
    let account_number: string = this.FundForm.get('accountNumber')?.value;
    let amount: number = this.FundForm.get('amount')?.value;
    this.accountService.withDrawFunds(account_number, amount).subscribe({
      next: (res) => {
          console.log(res);
          this.getAccountDetails();
      },
      error: (e) => {
        console.log(e.message);
      }
    });
    this.FundForm.reset();
  }
}
