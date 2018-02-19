import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarketComponent
  ],
  exports: [
    MarketComponent
  ]
})
export class MarketModule { }
