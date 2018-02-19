import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopbarComponent,
    UserInfoComponent,
    NotificationsComponent
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
