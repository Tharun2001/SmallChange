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
    BuyComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
