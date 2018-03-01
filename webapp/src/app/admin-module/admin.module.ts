import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MarketModule } from '../market-module/market.module';
import { LaddaModule } from 'angular2-ladda';
import { ListCardsComponent } from './list-cards/list-cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarketModule,
    LaddaModule
  ],
  declarations: [AdminComponent, ListCardsComponent]
})
export class AdminModule { }
