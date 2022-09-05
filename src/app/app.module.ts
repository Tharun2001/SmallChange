import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkComponent } from './atoms/link/link.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TextBoxStandardComponent } from './atoms/text-box-standard/text-box-standard.component';
import { TextBoxPasswordComponent } from './atoms/text-box-password/text-box-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    ButtonComponent,
    TextBoxStandardComponent,
    TextBoxPasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
