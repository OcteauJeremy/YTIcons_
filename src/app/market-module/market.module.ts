import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarketComponent,
    CardComponent
  ],
  exports: [
    MarketComponent
  ]
})
export class MarketModule { }
