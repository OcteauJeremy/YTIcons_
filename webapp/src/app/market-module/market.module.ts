import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
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
