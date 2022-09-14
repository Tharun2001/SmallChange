import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ViewPortfolioComponent } from './portfolio/view-portfolio/view-portfolio.component';


const routes = [
  { path: '', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent}
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
