import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ProfileComponent,
  SettingsComponent
  ]
})
export class AccountModule { }
