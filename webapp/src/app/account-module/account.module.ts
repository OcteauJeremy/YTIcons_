import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {MarketModule} from "../market-module/market.module";

@NgModule({
  imports: [
    CommonModule,
    MarketModule
  ],
  declarations: [
  ProfileComponent,
  SettingsComponent
  ]
})
export class AccountModule { }
