import { Component, Input, OnInit } from '@angular/core';
import { dummy_data_mfs, dummy_data_stocks } from 'src/app/models/mock-data';
import { MfHolding } from 'src/app/models/mf-holding';

import { MatDialog} from '@angular/material/dialog'
import { SellTradeComponent } from 'src/app/sell-trade/sell-trade.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mf-portfolio',
  templateUrl: './mf-portfolio.component.html',
  styleUrls: ['./mf-portfolio.component.css']
})
export class MfPortfolioComponent implements OnInit {
  @Input() eventTriggered!:boolean;
  data: MfHolding[] = dummy_data_mfs;
  invested_amount: number = 0;
  current_amount: number = 0;
  constructor(private dialog:MatDialog,
    private snackbar: MatSnackBar) { }
  ngOnChanges()
  {
     this.ngOnInit();
  }
  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount= 0;
    for (var i = 0; i < this.data.length; i++) {
      this.invested_amount += (this.data[i].buy_price * this.data[i].quantity)
      this.current_amount += (this.data[i].LTP * this.data[i].quantity)
    }
  }

  onClick() {
    dummy_data_stocks.push(
      { name: 'App', code: 'AAL', quantity: 100, buy_price: 155.34, LTP: 154.29, asset_class: 'AC' }
    );
  }

  openDialog(a:any): void {
    const dialogRef = this.dialog.open(SellTradeComponent, {
      data: a
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.snackbar.open("Sell order : " + result.security.code +  " ("+result.sellQuantity +" qty) has been sold" , "OK");

      console.log('The dialog was closed', result);
    });
  }

}