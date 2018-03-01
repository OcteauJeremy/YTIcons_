import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {LiveComponent} from './live/live.component';
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [LiveComponent]
})
export class LiveModule { }
