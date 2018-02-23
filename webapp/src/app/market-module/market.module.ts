import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { InputDebounceComponent } from './input-debounce/input-debounce.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
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
