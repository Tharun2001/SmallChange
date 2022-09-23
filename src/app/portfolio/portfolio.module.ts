import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPortfolioComponent } from './view-portfolio/view-portfolio.component';
import { BondPortfolioComponent } from './bond-portfolio/bond-portfolio.component';
import { MfPortfolioComponent } from './mf-portfolio/mf-portfolio.component';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
<<<<<<< HEAD
import {MatTabsModule} from '@angular/material/tabs';
=======
>>>>>>> sandhya

@NgModule({
  declarations: [
    ViewPortfolioComponent,
    BondPortfolioComponent,
    MfPortfolioComponent,
    StockPortfolioComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    MatTabsModule
=======
>>>>>>> sandhya
  ]
})
export class PortfolioModule { }
