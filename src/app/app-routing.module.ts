import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ViewPortfolioComponent } from './portfolio/view-portfolio/view-portfolio.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { BuyComponentComponent } from './buy-component/buy-component.component';


const routes = [
  { path: '', component: LoginPageComponent, canActivate: [NotLoggedInGuard]},
  { path: 'signup', component: SignupPageComponent, canActivate: [NotLoggedInGuard]},
  { path: 'portfolio', component: ViewPortfolioComponent, canActivate: [IsLoggedInGuard]},
  { path: 'activity', component: TradeHistoryComponent, canActivate: [IsLoggedInGuard]},
  { path: 'buy', component: BuyComponentComponent, canActivate: [IsLoggedInGuard]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
