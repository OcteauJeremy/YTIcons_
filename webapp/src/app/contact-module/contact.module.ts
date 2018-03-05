import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import {RecaptchaModule} from "ng-recaptcha";
import {FormsModule} from "@angular/forms";
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RecaptchaModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
