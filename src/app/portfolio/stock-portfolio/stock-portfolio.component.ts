import { Component, Input, OnInit } from '@angular/core';
import { StockHolding } from 'src/app/models/stock-holding';
import { dummy_data_stocks } from '../../models/mock-data';

@Component({
  selector: 'app-stock-portfolio',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.css']
})
export class StockPortfolioComponent implements OnInit {
  @Input() eventTriggered!: boolean;
  data: StockHolding[] = dummy_data_stocks;
  invested_amount: number = 0;
  current_amount: number = 0;
  // dtOptions: DataTables.Settings = {};

  constructor() {
  }
  ngOnChanges() {
    this.ngOnInit();
    
  }
  
  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount = 0;
    for (var i = 0; i < this.data.length; i++) {
      this.invested_amount += (this.data[i].buy_price * this.data[i].quantity)
      this.current_amount += (this.data[i].LTP * this.data[i].quantity)
    }
  }
}


