import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPortfolioComponent } from './view-portfolio/view-portfolio.component';
import { BondPortfolioComponent } from './bond-portfolio/bond-portfolio.component';
import { MfPortfolioComponent } from './mf-portfolio/mf-portfolio.component';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ViewPortfolioComponent,
    BondPortfolioComponent,
    MfPortfolioComponent,
    StockPortfolioComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class PortfolioModule { }
