import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MarketModule } from '../market-module/market.module';
import { LaddaModule } from 'angular2-ladda';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { ManagerService } from '../services/manager.service';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarketModule,
    LaddaModule,
    PipesModule
  ],
  declarations: [AdminComponent, ListCardsComponent],
  providers: [
    ManagerService
  ]
})
export class AdminModule { }
