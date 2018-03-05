import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { DirectivesModule } from "../directives/directives.module";
import { ManagerService } from '../services/manager.service';
import { RecaptchaModule } from "ng-recaptcha";
import { ForgottenPasswordComponent } from './lost-password/forgotten-password/forgotten-password.component';
import { SetPasswordComponent } from './lost-password/set-password/set-password.component';
import { RouterModule } from '@angular/router';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DirectivesModule,
    RecaptchaModule,
    RouterModule,
    LaddaModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgottenPasswordComponent,
    SetPasswordComponent
  ],
  exports: [
    SigninComponent
  ],
  providers: [
    AuthenticationService,
    ManagerService
  ]
})
export class AuthenticationModule { }
