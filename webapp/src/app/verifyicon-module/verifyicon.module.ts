import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { VerifyIconComponent } from './verifyicon/verifyicon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [VerifyIconComponent]
})
export class VerifyIconModule { }
