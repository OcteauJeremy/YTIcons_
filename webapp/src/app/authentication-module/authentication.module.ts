import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SigninComponent
  ],
  exports: [
    SigninComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
