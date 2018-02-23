import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CurrencyPipe,
    CapitalizePipe
  ],
  exports: [
    CurrencyPipe,
    CapitalizePipe,
    DatePipe
  ]
})
export class PipesModule { }
