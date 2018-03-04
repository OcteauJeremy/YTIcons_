import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import { ManagerService } from '../services/manager.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    MarketComponent,
    CardComponent,
    TransactionsComponent,
    PriceChartComponent,
    CardModalComponent
  ],
  exports: [
    MarketComponent,
    CardComponent,
    CardModalComponent
  ],
  providers: [
    ManagerService
  ]
})
export class MarketModule { }
