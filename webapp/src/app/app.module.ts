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
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { RealvalueService } from './services/realvalue.service';
import {CardService} from './services/card.service';
import {FaqModule} from './faq-module/faq.module';
import {AuthenticationService} from './services/authentication.service';
import { UserService } from './services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeService } from './services/type.service';
import { ManagerService } from './services/manager.service';
import { LeaderboardModule } from './leaderboard-module/leaderboard.module';
import { PrivacyPolicyModule } from "./privacypolicy-module/privacypolicy.module";
import { LegalModule } from "./legal-module/legal.module";
import {NationalityService} from "./services/nationality.service";
import {CategoryService} from "./services/category.service";
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SlickModule.forRoot(),
    AngularFontAwesomeModule,
    TopbarModule,
    MenuModule,
    FooterModule,
    HomeModule,
    MarketModule,
    AppRoutingModule,
    AccountModule,
    AuthenticationModule,
    FaqModule,
    LeaderboardModule,
    PrivacyPolicyModule,
    LegalModule,
    NgbModule.forRoot()
  ],
  providers: [
    RealvalueService,
    CardService,
    AuthenticationService,
    UserService,
    TypeService,
    ManagerService,
    NationalityService,
    CategoryService,
    CurrencyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
