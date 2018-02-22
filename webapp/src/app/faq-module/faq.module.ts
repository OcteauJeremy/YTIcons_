import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
