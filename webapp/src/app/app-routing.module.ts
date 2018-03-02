import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-module/home/home.component';
import { MarketComponent } from './market-module/market/market.component';
import { ProfileComponent } from './account-module/profile/profile.component';
import { SigninComponent } from './authentication-module/signin/signin.component';
import {SignupComponent} from './authentication-module/signup/signup.component';
import {FaqComponent} from './faq-module/faq/faq.component';
import { LeaderboardComponent } from './leaderboard-module/leaderboard/leaderboard.component';
import { PrivacyPolicyComponent } from "./privacypolicy-module/privacypolicy/privacypolicy.component";
import {LegalComponent} from "./legal-module/legal/legal.component";
import { AdminComponent } from './admin-module/admin/admin.component';
import {ContactComponent} from './contact-module/contact/contact.component';
import {BountyProgramComponent} from './bountyprogram-module/bountyprogram/bountyprogram.component';
import {OperationComponent} from './operation-module/operation/operation.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import {LiveComponent} from './live-module/live/live.component';
import {TermsOfServiceComponent} from './termsofservice-module/termsofservice/termsofservice.component';
import { ListCardsComponent } from './admin-module/list-cards/list-cards.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'account',
    component: ProfileComponent,
    canActivate: [
      AuthenticationGuard
    ],
    data: {
      redirectTo: '/login'
    }
  },
  {
    path: 'account/:address',
    component: ProfileComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'live',
    component: LiveComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'termsofservice',
    component: TermsOfServiceComponent,
  },
  {
    path: 'operation',
    component: OperationComponent,
  },
  {
    path: 'bountyprogram',
    component: BountyProgramComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      IsAdminGuard
    ]
  },
  {
    path: 'list-cards',
    component: ListCardsComponent,
    canActivate: [
      IsAdminGuard
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'legal',
    component: LegalComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {

}
