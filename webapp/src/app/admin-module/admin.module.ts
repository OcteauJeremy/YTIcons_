import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MarketModule } from '../market-module/market.module';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarketModule,
    LaddaModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
