import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopbarModule } from './topbar-module/topbar.module';
import { MenuModule } from './menu-module/menu.module';
import { FooterModule } from './footer-module/footer-module.module';
import { HomeModule } from './home-module/home.module';
import { CommonModule } from '@angular/common';
import { MarketModule } from './market-module/market.module';
import { AccountModule } from './account-module/account.module';
import { AuthenticationModule } from './authentication-module/authentication.module';


import { RealvalueService } from './services/realvalue.service';
import { RealvaluePipe } from './realvalue.pipe';
import {CardService} from './services/card.service';
import {FaqModule} from './faq-module/faq.module';
import {AuthenticationService} from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    RealvaluePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SlickModule.forRoot(),
    TopbarModule,
    MenuModule,
    FooterModule,
    HomeModule,
    MarketModule,
    AppRoutingModule,
    AccountModule,
    AuthenticationModule,
    FaqModule
  ],
  providers: [
    RealvalueService,
    CardService,
    AuthenticationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
