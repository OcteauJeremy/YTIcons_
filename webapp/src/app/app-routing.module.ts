import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-module/home/home.component';
import { MarketComponent } from './market-module/market/market.component';
import { ProfileComponent } from './account-module/profile/profile.component';
import { SigninComponent } from './authentication-module/signin/signin.component';
import {SignupComponent} from './authentication-module/signup/signup.component';
import {FaqComponent} from './faq-module/faq/faq.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'market',
    component: MarketComponent,
    canActivate: []
  },
  {
    path: 'account',
    component: ProfileComponent,
  },
  {
    path: 'account/:address',
    component: ProfileComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
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
