import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { BuyTradeComponent } from '../buy-trade/buy-trade.component';
import { SecurityList } from '../models/securitylist';
import { SecuritiesService } from './service/securities.service';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  displayedColumns = ['name', 'code', 'asset_class',  'ltp', 'trade'];
  
  assetClassList = ['Main Index', 'Small cap company stocks', 'International market stocks', 
  'Government bonds', 'Corporate bonds'];
  selectedAssetClasses!: any;
  assetClassForm = new FormControl();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  dataSource!: MatTableDataSource<SecurityList>;

  securities!: SecurityList[];
  fullSecurities!: SecurityList[];
  constructor(private dialog: MatDialog,
    private snackbar: MatSnackBar, private securitiesService: SecuritiesService) { }

  ngOnInit(): void {
    this.getSecurities();
  }

  getSecurities(){
    this.securitiesService.getSecurities().subscribe({ next: (securities)=>{
        this.securities = securities;
        this.fullSecurities = securities;
        console.log(securities);
        this.dataSource = new MatTableDataSource(this.securities);
        this.dataSource.paginator = this.paginator;
    }, error: (e)=>{
        console.log(e);
    }})
  }

  filterSubmit(){
    if(this.selectedAssetClasses != null && this.selectedAssetClasses.length > 0){
      console.log("class filtering.....")
      this.securities = this.fullSecurities.filter((security) => { return this.selectedAssetClasses.includes(security.assetClass)})
    }
    this.dataSource = new MatTableDataSource(this.securities);
    this.dataSource.paginator = this.paginator;
  }

  filterClear(){
    this.selectedAssetClasses = null;
    this.dataSource = new MatTableDataSource(this.fullSecurities);
    this.dataSource.paginator = this.paginator;
  }

  buy(security: SecurityList){
    console.log(security)
  }

  openDialog(a:any): void {
    const dialogRef = this.dialog.open(BuyTradeComponent, {
      data: a
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.snackbar.open("Buy order : " + result.security.scode +  " ("+result.buyQuantity +" qty) has been bought." , "OK");
      console.log('The dialog was closed', result);
    });
  }
}
