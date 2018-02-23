import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule } from '@angular/router';
import { PriceChartComponent } from './price-chart/price-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    NgbModule
  ],
  declarations: [
    MarketComponent,
    CardComponent,
    TransactionsComponent,
    PriceChartComponent
  ],
  exports: [
    MarketComponent,
    CardComponent
  ]
})
export class MarketModule { }
