import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SellTradeComponent } from 'src/app/sell-trade/sell-trade.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { SecurityHolding } from 'src/app/models/security-holding';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-stock-portfolio',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.css']
})
export class StockPortfolioComponent implements OnInit {
  assest_class = ['Main Index', 'Small cap company stocks', 'International market stocks'];
  @Input() eventTriggered!: boolean;
  @Output("updateOverview") updateOverview: EventEmitter<any> = new EventEmitter();
  
  data!: SecurityHolding[];
  invested_amount: number = 0;
  current_amount: number = 0;
  // dtOptions: DataTables.Settings = {};

  constructor( private dialog: MatDialog,
    private snackbar: MatSnackBar, private portfolioService: PortfolioService) {
  }
  ngOnChanges() {
    this.ngOnInit();
    
  }
  
  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount = 0;
    this.getStock();
    console.log(this.data);

  }

  getStock(){
    this.portfolioService.getSecurities().subscribe({ next: (holdings) => {
      console.log(holdings)
      this.invested_amount = 0;
      this.current_amount = 0;
      this.data = holdings.filter((holding) => {
        return this.assest_class.includes(holding.asset_class);
      });
      for (var i = 0; i < this.data.length; i++) {
        this.invested_amount += this.data[i].invested_amount;
        this.current_amount += (this.data[i].ltp * this.data[i].quantity)
      }
      console.log("holdings...")
      console.log(holdings);
      console.log(this.invested_amount, this.current_amount)
    }, error: () => {

    }})
  }

  openDialog(a:any): void {
    const dialogRef = this.dialog.open(SellTradeComponent, {
      data: a
    });

    dialogRef.afterClosed().subscribe((result: any) => {
     
      this.updateOverview.emit();
      this.getStock();
      this.snackbar.open("Sell order : " + result.security.code +  " ("+result.sellQuantity +" qty) has been sold" , "OK");
      console.log('The dialog was closed', result);
      
    });
  }

  public RoundValue(value: number): number {
    return Math.round(value*100)/100;
 }
}


