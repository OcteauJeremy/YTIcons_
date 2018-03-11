import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TransactionsComponent
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
