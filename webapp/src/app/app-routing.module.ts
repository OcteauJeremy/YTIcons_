import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-module/home/home.component';
import { MarketComponent } from './market-module/market/market.component';
import { ProfileComponent } from './account-module/profile/profile.component';
import { SigninComponent } from './authentication-module/signin/signin.component';

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
    path: 'login',
    component: SigninComponent,
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
export class AppRoutingModule { }