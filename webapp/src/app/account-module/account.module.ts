import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {MarketModule} from "../market-module/market.module";
import {FormsModule} from "@angular/forms";
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  imports: [
    CommonModule,
    MarketModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
  ProfileComponent,
  SettingsComponent
  ]
})
export class AccountModule { }
