import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MarketModule } from '../market-module/market.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarketModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
