import { Component, Input, OnInit } from '@angular/core';
import { BondHolding } from 'src/app/models/bond-holding';
import { dummy_data_bonds } from 'src/app/models/mock-data';

@Component({
  selector: 'app-bond-portfolio',
  templateUrl: './bond-portfolio.component.html',
  styleUrls: ['./bond-portfolio.component.css']
})
export class BondPortfolioComponent implements OnInit {

  @Input() eventTriggered!: boolean;
  data: BondHolding[] = dummy_data_bonds;
  invested_amount: number = 0;
  current_amount: number = 0;

  constructor() { }

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
