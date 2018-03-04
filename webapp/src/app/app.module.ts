import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './menu-module/menu.module';
import { FooterModule } from './footer-module/footer-module.module';
import { HomeModule } from './home-module/home.module';
import { CommonModule } from '@angular/common';
import { MarketModule } from './market-module/market.module';
import { AccountModule } from './account-module/account.module';
import { AuthenticationModule } from './authentication-module/authentication.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { RealvalueService } from './services/realvalue.service';
import { CardService } from './services/card.service';
import { FaqModule } from './faq-module/faq.module';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeService } from './services/type.service';
import { ManagerService } from './services/manager.service';
import { LeaderboardModule } from './leaderboard-module/leaderboard.module';
import { PrivacyPolicyModule } from './privacypolicy-module/privacypolicy.module';
import { LegalModule } from './legal-module/legal.module';
import { NationalityService } from './services/nationality.service';
import { CategoryService } from './services/category.service';
import { CurrencyService } from './services/currency.service';
import { AdminModule } from './admin-module/admin.module';
import { YoutubeService } from './services/youtube.service';
import { ContactModule } from './contact-module/contact.module';
import { BountyProgramModule } from './bountyprogram-module/bountyprogram.module';
import { OperationModule } from './operation-module/operation.module';
import { DirectivesModule } from "./directives/directives.module";
import { CookieService } from 'ng2-cookies';
import { IsAdminGuard } from './guards/is-admin.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { SocketService } from "./services/socket.service";
import { LiveModule } from './live-module/live.module';
import { TermsOfServiceModule } from './termsofservice-module/termsofservice.module';
import { LeaderboardService } from "./services/leaderboard.service";
import { LaddaModule } from 'angular2-ladda';
import { LiveService } from "./services/live.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { VerifyIconModule } from './verifyicon-module/verifyicon.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SlickModule.forRoot(),
    AngularFontAwesomeModule,
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
    AdminModule,
    NgbModule.forRoot(),
    ContactModule,
    BountyProgramModule,
    OperationModule,
    DirectivesModule,
    LiveModule,
    TermsOfServiceModule,
    LaddaModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    VerifyIconModule
  ],
  providers: [
    RealvalueService,
    ManagerService,
    AuthenticationGuard,
    AuthenticationService,
    CardService,
    UserService,
    TypeService,
    NationalityService,
    CategoryService,
    CurrencyService,
    YoutubeService,
    SocketService,
    LeaderboardService,
    CookieService,
    IsAdminGuard,
    LiveService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
