import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dummy_data_order } from '../models/mock-data';
import { TradeStock } from '../models/trade-stock';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {
  error = "";
  filter = '';
  stAmount = '';
  endAmount = '';
  stDate = '';
  endDate = '';
  assestclass = '';
  side = '';
  validChars = new RegExp('^[0-9.]*$');
  trades: TradeStock[] = dummy_data_order;
  constructor() { }

  ngOnInit(): void {
  }

  getTradeHistory(filter: string){
    this.filter = filter;
    if(filter == ''){
      this.trades = dummy_data_order;
    }
  }

  onAssetOptionSelection(option: string){
    this.assestclass = option;
    this.trades = dummy_data_order.filter((trade) => {
      console.log(trade.asset_class);
      return trade.asset_class == this.assestclass
    });
    console.log(this.assestclass);
  }

  onSideOptionSelection(option: string){
    this.side = option;
    this.trades = dummy_data_order.filter((trade) => {
      return trade.trade_type == option;
    });
    console.log(this.side);
  }

  amountSubmit(form: NgForm){
    if(this.stAmount == '' || this.endAmount == ''){
      this.error = 'empty-amount';
      return;
    }
    if(!this.validChars.test(this.stAmount) || !this.validChars.test(this.endAmount)){
      this.error = 'invalid-amount-chars';
      return;
    }
    if(parseFloat(this.endAmount) < parseFloat(this.stAmount)){
      this.error = 'invalid-amount';
      return;
    }
    this.error = '';
    console.log(this.stAmount, this.endAmount);
    //form.resetForm();
    this.trades = dummy_data_order.filter((trade) => {return trade.price > parseFloat(this.stAmount) && trade.price < parseFloat(this.endAmount)})
  }

  dateSubmit(form: NgForm){
    if(this.endDate == '' || this.stDate == ''){
      this.error = 'empty-date';
      return;
    }
    if(new Date(this.endDate).getTime() < new Date(this.stDate).getTime()){
      this.error = 'invalid-date';
      return;
    }
    this.error = '';
    console.log(this.stDate, this.endDate);
    this.trades = dummy_data_order.filter((trade) => {return new Date(trade.date).getTime() >= new Date(this.stDate).getTime()
    && new Date(trade.date).getTime() <= new Date(this.endDate).getTime() });
  }
}
