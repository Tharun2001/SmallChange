import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPortfolioComponent } from './portfolio/view-portfolio/view-portfolio.component';


const routes = [
  { path: '', component: LoginPageComponent},
  { path: 'portfolio', component: ViewPortfolioComponent}
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
