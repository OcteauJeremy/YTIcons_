import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {BountyProgramComponent} from './bountyprogram/bountyprogram.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BountyProgramComponent]
})
export class BountyProgramModule { }
