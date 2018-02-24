import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { DatePipe } from '@angular/common';
import { AbbreviateNumberPipe } from './abbreviate-number.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CurrencyPipe,
    CapitalizePipe,
    AbbreviateNumberPipe
  ],
  exports: [
    CurrencyPipe,
    CapitalizePipe,
    DatePipe,
    AbbreviateNumberPipe
  ]
})
export class PipesModule { }