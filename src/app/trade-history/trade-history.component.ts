import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

import { TradeStock } from '../models/trade-stock';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { TradeService } from './service/trade.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  displayedColumns = ['name', 'code', 'asset_class', 'quantity', 'price', 'trade_type', 
  'date'];

  dataSource!: MatTableDataSource<TradeStock>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  assetClassForm = new FormControl();
  sideFilter = new FormControl();


  assetClassList = ['Main index stocks', 'Small cap company stocks', 'International market stocks', 
  'Government bonds', 'Corporate bonds'];
  selectedAssetClasses!: any;
  selectedSide!: any;
  dateRange = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  error = "";
  filter = '';
  stAmount = '';
  endAmount = '';
  validChars = new RegExp('^[0-9.]*$');
  trades!: TradeStock[];
  fullTrades!: TradeStock[];

  constructor(private tradeService: TradeService) {}

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe((trades) => {
      console.log('trades', trades)
      this.fullTrades = trades;
      for(var i=0; i<this.fullTrades.length; i++){
        if(this.fullTrades[i].trade_type == 'B'){
          this.fullTrades[i].trade_type = 'Buy';
        }
        else{
          this.fullTrades[i].trade_type = 'Sell';
        }
      }
      this.dataSource = new MatTableDataSource(this.fullTrades);
      this.dataSource.paginator = this.paginator;
    }, (e) => {

    });
    
  }
  getTradeHistory(filter: string){
    this.filter = filter;
    if(filter == ''){
      this.trades = this.fullTrades;
    }
    this.dataSource = new MatTableDataSource(this.trades);
    this.dataSource.paginator = this.paginator;
  }
  
  filterSubmit(){
    this.trades = this.fullTrades.filter((trade) => {
      console.log(trade.asset_class);
      return trade.trade_type == this.selectedSide
    });
    this.dataSource = new MatTableDataSource(this.trades);
    this.dataSource.paginator = this.paginator;
  }



  // onAssetOptionSelection(option: string){
  //   this.assestclass = option;
  //   this.trades = this.fullTrades.filter((trade) => {
  //     console.log(trade.asset_class);
  //     return trade.asset_class == this.assestclass
  //   });
  //   this.dataSource = new MatTableDataSource(this.trades);
  //   this.dataSource.paginator = this.paginator;

  //   console.log(this.assestclass);
  // }

  // onSideOptionSelection(option: string){
  //   this.side = option;
  //   this.trades = this.fullTrades.filter((trade) => {
  //     return trade.trade_type == option;
  //   });
  //   this.dataSource = new MatTableDataSource(this.trades);
  //   this.dataSource.paginator = this.paginator;
  //   console.log(this.side);
  // }

  // amountSubmit(){
  //   if(this.stAmount == '' || this.endAmount == ''){
  //     this.error = 'empty-amount';
  //     return;
  //   }
  //   if(!this.validChars.test(this.stAmount) || !this.validChars.test(this.endAmount)){
  //     this.error = 'invalid-amount-chars';
  //     return;
  //   }
  //   if(parseFloat(this.endAmount) < parseFloat(this.stAmount)){
  //     this.error = 'invalid-amount';
  //     return;
  //   }
  //   this.error = '';
  //   console.log(this.stAmount, this.endAmount);
  //   //form.resetForm();
  //   this.trades = this.fullTrades.filter((trade) => {return trade.price > parseFloat(this.stAmount) && trade.price < parseFloat(this.endAmount)})
  //   this.dataSource = new MatTableDataSource(this.trades);
  //   this.dataSource.paginator = this.paginator;
  // }

  // dateSubmit(form: NgForm){
  //   if(this.endDate == '' || this.stDate == ''){
  //     this.error = 'empty-date';
  //     return;
  //   }
  //   if(new Date(this.endDate).getTime() < new Date(this.stDate).getTime()){
  //     this.error = 'invalid-date';
  //     return;
  //   }
  //   this.error = '';
  //   console.log(this.stDate, this.endDate);
  //   this.trades = this.fullTrades.filter((trade) => {return new Date(trade.date).getTime() >= new Date(this.stDate).getTime()
  //   && new Date(trade.date).getTime() <= new Date(this.endDate).getTime() });
  //   this.dataSource = new MatTableDataSource(this.trades);
  //   this.dataSource.paginator = this.paginator;
  // }
  
}
