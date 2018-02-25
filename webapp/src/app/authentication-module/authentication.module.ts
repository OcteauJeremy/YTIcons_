import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import { SignupComponent } from './signup/signup.component';
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DirectivesModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  exports: [
    SigninComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
