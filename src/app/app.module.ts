import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { StockPortfolioComponent } from './portfolio/stock-portfolio/stock-portfolio.component';
import { MfPortfolioComponent } from './portfolio/mf-portfolio/mf-portfolio.component';
import { BondPortfolioComponent } from './portfolio/bond-portfolio/bond-portfolio.component';
import { ViewPortfolioComponent } from './portfolio/view-portfolio/view-portfolio.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import {HttpClientModule} from "@angular/common/http";
import { BuyComponentComponent } from './buy-component/buy-component.component';
import { SellTradeComponent } from './sell-trade/sell-trade.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AccountComponent } from './account/account.component';
import { AddBankAccountComponent } from './account/add-bank-account/add-bank-account.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SecuritiesComponent } from './securities/securities.component';
import { BuyTradeComponent } from './buy-trade/buy-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLogoComponent,
    FooterBarComponent,
    LoginFormComponent,
    NavbarComponent,
    HeaderLogoComponent,
    LoginPageComponent,
    StockPortfolioComponent,
    MfPortfolioComponent,
    BondPortfolioComponent,
    ViewPortfolioComponent,
    SignupFormComponent,
    SignupPageComponent,
    TradeHistoryComponent,
    BuyComponentComponent,
    SellTradeComponent,
    AccountComponent,
    AddBankAccountComponent,
    SecuritiesComponent,
    BuyTradeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
