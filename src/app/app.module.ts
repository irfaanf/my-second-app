import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdvertComponent } from './advert/advert.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { WarningOneComponent } from './warningAlert/warning-one/warning-one.component';
import { WarningTwoComponent } from './warningAlert/warning-two/warning-two.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdvertComponent,
    HeaderComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    WarningOneComponent,
    WarningTwoComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
