import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AccountService } from 'src/app/account/service/account.service';
import { bank_accounts, dummy_data_bonds, dummy_data_mfs} from 'src/app/models/mock-data';
import { SecurityHolding } from 'src/app/models/security-holding';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {
  constructor(private portfolioService: PortfolioService, private accountService: AccountService) { }
  @Input() fromMain!: boolean;
  eventTriggered: boolean = true;
  data!: SecurityHolding[];
  invested_amount: number = 0;
  current_amount: number = 0;
  funds: number = 0;
  
  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount = 0;
    this.funds = 0;
    this.getSecurities();
    this.getAccountDetails();
  }

  getAccountDetails(){
    console.log("emited")
    this.accountService.getAccountDetails().subscribe({ next: (account) => {
      this.funds = account.funds;
      console.log(account);
    }, error: (e) => {

    }})
  }
  
  getSecurities(){
    this.portfolioService.getSecurities().subscribe({ next: (holdings) => {
      this.data = holdings;
      for (var i = 0; i < this.data.length; i++) {
        this.invested_amount += this.data[i].invested_amount;
        this.current_amount += (this.data[i].ltp * this.data[i].quantity)
      }
    }, error: () => {

    }})
  }
}
