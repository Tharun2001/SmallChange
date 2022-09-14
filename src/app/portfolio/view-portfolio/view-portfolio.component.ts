import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { bank_accounts, dummy_data_bonds, dummy_data_mfs, dummy_data_stocks } from 'src/app/models/mock-data';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {
  constructor() { }
  @Input() fromMain!: boolean;
  eventTriggered: boolean = true;
  invested_amount: number = 0;
  current_amount: number = 0;
  funds: number = 0;
  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount = 0;
    this.funds = 0;
    for (var i = 0; i < dummy_data_stocks.length; i++) {
      this.invested_amount += (dummy_data_stocks[i].buy_price * dummy_data_stocks[i].quantity)
      this.current_amount += (dummy_data_stocks[i].LTP * dummy_data_stocks[i].quantity)
    }
    for (var i = 0; i < dummy_data_mfs.length; i++) {
      this.invested_amount += (dummy_data_mfs[i].buy_price * dummy_data_mfs[i].quantity)
      this.current_amount += (dummy_data_mfs[i].LTP * dummy_data_mfs[i].quantity)
    }
    for (var i = 0; i < dummy_data_bonds.length; i++) {
      this.invested_amount += (dummy_data_bonds[i].buy_price * dummy_data_bonds[i].quantity)
      this.current_amount += (dummy_data_bonds[i].LTP * dummy_data_bonds[i].quantity)
    }
    for (var i = 0; i < bank_accounts.length; i++) {
      this.funds += bank_accounts[i].balance
    }
  }
  ngOnChanges() {
    this.eventTriggered?this.eventTriggered=false:this.eventTriggered=true;
    this.ngOnInit();
}
}
