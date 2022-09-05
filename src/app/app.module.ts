import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkComponent } from './atoms/link/link.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TextBoxStandardComponent } from './atoms/text-box-standard/text-box-standard.component';
import { TextBoxPasswordComponent } from './atoms/text-box-password/text-box-password.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { HeaderTextComponent } from './atoms/header-text/header-text.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { ParagraphTextComponent } from './atoms/paragraph-text/paragraph-text.component';
import { NavBarLinkComponent } from './atoms/nav-bar-link/nav-bar-link.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLabelComponent,
    HeaderTextComponent,
    LogoComponent,
    ParagraphTextComponent,
    LinkComponent,
    ButtonComponent,
    TextBoxStandardComponent,
    TextBoxPasswordComponent,
    NavBarLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
