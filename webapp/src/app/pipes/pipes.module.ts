import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CapitalizePipe } from './capitalize.pipe';

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
    CapitalizePipe
  ]
})
export class PipesModule { }
