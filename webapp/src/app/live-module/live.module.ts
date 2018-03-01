import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {LiveComponent} from './live/live.component';
import {PipesModule} from "../pipes/pipes.module";
import {MarketModule} from "../market-module/market.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    MarketModule
  ],
  declarations: [LiveComponent]
})
export class LiveModule { }
