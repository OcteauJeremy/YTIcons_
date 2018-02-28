import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {RouterModule} from "@angular/router";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [LeaderboardComponent]
})
export class LeaderboardModule { }
