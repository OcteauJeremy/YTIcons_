import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TopbarModule } from '../topbar-module/topbar.module';
import {UserInfoComponent} from '../topbar-module/user-info/user-info.component';
import {NotificationsComponent} from '../topbar-module/notifications/notifications.component';
import {CurrencySelectorComponent} from '../topbar-module/currency-selector/currency-selector.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

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
