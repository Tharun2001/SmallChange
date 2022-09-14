import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import {
  main_index_stocks,
  small_cap_company_stocks,
  international_market_stocks,
} from 'src/app/models/mock-data';
import { StockList } from '../models/stock-list';

@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.css'],
})
export class BuyComponentComponent implements OnInit {

  selectedstock : any = '';
  quantity:any =  '';
  selectedAsset = '';
  mainIndex = main_index_stocks;
  smallCap = small_cap_company_stocks;
  international = international_market_stocks;
  fundBalance: any = 0;
  success: any = false;



  governmentBonds = [
    {
      name: 'SPDR Bloomberg Barclays',
      code: 'BIL',
      buy_price: 22.33,
      LTP: 24,
      asset_class: 5,
    },
    {
      name: 'iShares US Treasury',
      code: 'GOVT',
      buy_price: 22.33,
      LTP: 24,
      asset_class: 5,
    },
    {
      name: 'PIMCO',
      code: 'MINT',
      buy_price: 22.33,
      LTP: 24,
      asset_class: 5,
    },
    {
      name: 'ProShares',
      code: 'TBX',
      buy_price: 22.33,
      LTP: 24,
      asset_class: 5,
    },
    {
      name: 'FlexShares',
      code: 'TDTT',
      buy_price: 22.33,
      LTP: 24,
      asset_class: 5,
    },
  ];

  corporateBonds = [
    {
      name: 'Schwab Corp',
      code: 'SCHI',
      buy_price: 155.34,
      LTP: 154.29,
      asset_class: 4,
    },
    {
      name: 'Invesco',
      code: 'INV',
      buy_price: 155.34,
      LTP: 154.29,
      asset_class: 4,
    },
    {
      name: 'Vanguard',
      code: 'VNG',
      buy_price: 155.34,
      LTP: 154.29,
      asset_class: 4,
    },
    {
      name: 'iShares',
      code: 'IGSB',
      buy_price: 155.34,
      LTP: 154.29,
      asset_class: 4,
    },
    {
      name: 'BlackRock',
      code: 'BLRC',
      buy_price: 155.34,
      LTP: 154.29,
      asset_class: 4,
    },
  ];

  constructor() {}

  update(event: Event){
    this.selectedstock = (event.target as HTMLInputElement).value;
  }

  update2(event: Event){
    this.fundBalance = (event.target as HTMLInputElement).value;
  }

  tradeValidation(){
    // let tradePrice: string = (this.selectedstock as unknown) as string;
    let tradePrice = <number>this.selectedstock;
    let quantity = <number>this.quantity;
    let fundBalance = <number>this.fundBalance;

    console.log(tradePrice)
    console.log(quantity)
    console.log(fundBalance)



    if((tradePrice*quantity) <= fundBalance){
      this.success = true;
    }

    else{
      this.success = "gonecase";
    }

  }

  ngOnInit(): void {}
}
