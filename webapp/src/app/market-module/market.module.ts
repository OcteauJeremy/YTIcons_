import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarketComponent,
    CardComponent
  ],
  exports: [
    MarketComponent,
    CardComponent
  ]
})
export class MarketModule { }
