import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import {RecaptchaModule} from "ng-recaptcha";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RecaptchaModule,
    FormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
