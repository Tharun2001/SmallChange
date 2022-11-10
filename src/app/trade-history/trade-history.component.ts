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

  displayedColumns = ['name', 'code', 'asset_class',  'price', 'quantity', 'trade_type','cost', 
  'timestamp'];

  dataSource!: MatTableDataSource<TradeStock>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  assetClassForm = new FormControl();
  sideFilter = new FormControl();


  assetClassList = ['Main Index', 'Small cap company stocks', 'International market stocks', 
  'Government bonds', 'Corporate bonds'];
  selectedAssetClasses!: any;
  selectedSide!: any;
  dateRange = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  sideOption!: any;

  empty: boolean = false;

  error = "";
  filter = '';
  stAmount!: number;
  endAmount!: number;
  validChars = new RegExp('^[0-9.]*$');
  trades!: TradeStock[];
  fullTrades!: TradeStock[];

  constructor(private tradeService: TradeService) {}

  ngOnInit(): void {
    this.empty = false;
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
      if(this.fullTrades == null || this.fullTrades.length == 0){
        this.empty = true;
      }
      this.dataSource = new MatTableDataSource(this.fullTrades);
      this.dataSource.paginator = this.paginator;
    }, (e) => {
        this.empty = true;
    });
    
  }
  
  getTradeHistory(){
    let start_date = this.dateRange.get('start')?.value;
    let end_date = this.dateRange.get('end')?.value;
   
    this.trades = this.fullTrades;

    if(start_date != null){
      this.trades = this.trades.filter((trade) =>  {
          return new Date(trade.date).getTime() >= new Date(start_date).getTime()
      });
    }
    if(end_date != null){
      this.trades = this.trades.filter((trade) =>  {
          return new Date(trade.date).getTime() <= new Date(end_date).getTime()
      });
    }
    
    // if(this.selectedAssetClasses.length > 0){
    //   this.trades = this.trades.filter((trade) =>{
        
    //   })
    // }

    this.dataSource = new MatTableDataSource(this.trades);
    this.dataSource.paginator = this.paginator;
  }
  
  filterSubmit(){
    this.empty = false;
    this.trades = this.fullTrades;

    let start_date = this.dateRange.get('start')?.value;
    let end_date = this.dateRange.get('end')?.value;

    
    console.log("class", this.selectedAssetClasses);
    // console.log("side", this.selectedSide);

    // console.log("date", start_date, end_date);
    // console.log("amount", start_amount, end_amount);
    if(this.selectedAssetClasses != null && this.selectedAssetClasses.length > 0){
      console.log("class filtering.....")
      this.trades = this.trades.filter((trade) => { return this.selectedAssetClasses.includes(trade.asset_class)})
    }
    
    if(this.selectedSide != null){
      console.log("side filtering.....")
      this.trades = this.trades.filter((trade) => {return trade.trade_type == this.selectedSide});
    }

        
    let start_amount = this.stAmount;
    let end_amount = this.endAmount;
    console.log("amount", start_amount, end_amount)
    if(start_amount != null || end_amount != null){
      if(this.amountValid()) {
        console.log("cost filtering.....")
        this.trades = this.trades.filter((trade) => {
          let cost = trade.quantity*trade.price;
          return  cost >= start_amount && cost  <= end_amount
        });
      }
    }

    if(start_date != null && end_date != null){
      console.log("date filtering.....")
      this.trades = this.trades.filter((trade) => {
          return new Date(trade.date) >= start_date && new Date(trade.date) <= end_date;
      });
    }
    if(this.trades == null || this.trades.length == 0){
      this.empty = true;
    }
    console.log("trades", this.trades);
    this.dataSource = new MatTableDataSource(this.trades);
    this.dataSource.paginator = this.paginator;
  }

  filterClear(){
    this.empty = false;
    this.selectedAssetClasses = null;
    this.selectedSide = null;
    this.dateRange.reset();
    this.error = '';
    (document.getElementById("start-amount") as HTMLInputElement).value = "";
    (document.getElementById("end-amount") as HTMLInputElement).value = "";
    
    this.trades = this.fullTrades;
    this.dataSource = new MatTableDataSource(this.fullTrades);
    this.dataSource.paginator = this.paginator;
  }

  amountValid(){
    if(this.stAmount == null || this.endAmount == null){
      this.error = 'empty-amount';
      return false;
    }
    if(this.endAmount < this.stAmount){
      this.error = 'invalid-amount';
      return false;
    }
    this.error = '';
    console.log(this.stAmount, this.endAmount);
    return true;
  }
  
}
