import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { DatePipe } from '@angular/common';
import { AbbreviateNumberPipe } from './abbreviate-number.pipe';
import { TimeBetweenPipe } from './time-between.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CurrencyPipe,
    CapitalizePipe,
    AbbreviateNumberPipe,
    TimeBetweenPipe
  ],
  exports: [
    CurrencyPipe,
    CapitalizePipe,
    DatePipe,
    TimeBetweenPipe,
    AbbreviateNumberPipe
  ]
})
export class PipesModule { }
