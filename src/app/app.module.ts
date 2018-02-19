import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickModule } from 'ngx-slick';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopbarModule } from './topbar-module/topbar.module';
import { MenuModule } from './menu-module/menu.module';
import { FooterModule } from './footer-module/footer-module.module';
import { HomeModule } from './home-module/home.module';
import { CommonModule } from '@angular/common';
import { MarketModule } from './market-module/market.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    SlickModule.forRoot(),
    TopbarModule,
    MenuModule,
    FooterModule,
    HomeModule,
    MarketModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
