import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { OperationComponent } from './operation/operation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [OperationComponent]
})
export class OperationModule { }
