import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    MenuComponent,
    UserInfoComponent,
    NotificationsComponent,
    CurrencySelectorComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
