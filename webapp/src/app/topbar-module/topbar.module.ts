import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    UserInfoComponent,
    NotificationsComponent,
    CurrencySelectorComponent
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
