import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {TermsOfServiceComponent} from './termsofservice/termsofservice.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TermsOfServiceComponent]
})
export class TermsOfServiceModule { }
