import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { DatePipe } from '@angular/common';
import { AbbreviateNumberPipe } from './abbreviate-number.pipe';
import { TimeBetweenPipe } from './time-between.pipe';
import { FrenchNumberPipe } from './french-number.pipe';
import { TimeBetweenLivePipe } from './time-between-live.pipe';
import { RoundPipe } from './round.pipe';
import { KeysPipe } from './keys.pipe';
import { RoundDownPipe } from './round-down.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CurrencyPipe,
    CapitalizePipe,
    AbbreviateNumberPipe,
    TimeBetweenPipe,
    FrenchNumberPipe,
    TimeBetweenLivePipe,
    RoundPipe,
    KeysPipe,
    RoundDownPipe
  ],
  exports: [
    CurrencyPipe,
    CapitalizePipe,
    DatePipe,
    TimeBetweenPipe,
    AbbreviateNumberPipe,
    FrenchNumberPipe,
    TimeBetweenLivePipe,
    RoundPipe,
    KeysPipe,
    RoundDownPipe
  ],
  providers: [
    RoundPipe,
    RoundDownPipe
  ]
})
export class PipesModule { }
