import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SecurityHolding } from 'src/app/models/security-holding';
import { SellTradeComponent } from 'src/app/sell-trade/sell-trade.component';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-bond-portfolio',
  templateUrl: './bond-portfolio.component.html',
  styleUrls: ['./bond-portfolio.component.css']
})
export class BondPortfolioComponent implements OnInit {

  @Input() eventTriggered!: boolean;
  data!: SecurityHolding[];
  invested_amount: number = 0;
  current_amount: number = 0;
  assest_class = ['Government bonds', 'Corporate bonds'];
  @Output("updateOverview") updateOverview: EventEmitter<any> = new EventEmitter();
  
  constructor(private dialog: MatDialog,
    private snackbar: MatSnackBar, private portfolioService: PortfolioService) { }

  ngOnChanges() {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount = 0;
    this.getBonds();
    console.log("Current amount", this.current_amount, "Invested", this.invested_amount);
    console.log(this.current_amount > this.invested_amount);
  }

  getBonds(){
    this.portfolioService.getSecurities().subscribe({ next: (holdings) => {
      console.log(holdings)
      this.data = holdings.filter((holding) => {
        return this.assest_class.includes(holding.asset_class);
      });
      this.invested_amount = 0;
      this.current_amount = 0;
      for (var i = 0; i < this.data.length; i++) {
        this.invested_amount += this.data[i].invested_amount;
        this.current_amount += (this.data[i].ltp * this.data[i].quantity)
      }
    }, error: () => {

    }})
  }
  openDialog(a:any): void {
    const dialogRef = this.dialog.open(SellTradeComponent, {
      data: a
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.getBonds();
      this.updateOverview.emit();
      this.snackbar.open("Sell order : " + result.security.code +  " ("+result.sellQuantity +" qty) has been sold" , "OK");
      console.log('The dialog was closed', result);
    });
  }

  public RoundValue(value: number): number {
    return Math.round(value*100)/100;
 }
 

}
