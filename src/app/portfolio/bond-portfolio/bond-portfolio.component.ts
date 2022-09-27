import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BondHolding } from 'src/app/models/bond-holding';
import { dummy_data_bonds } from 'src/app/models/mock-data';
import { SellTradeComponent } from 'src/app/sell-trade/sell-trade.component';

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

  constructor(private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

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
