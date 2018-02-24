import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {BountyProgramComponent, ContactComponent} from './bountyprogram/bountyprogram.component';
import {CharityComponent} from './charity/charity.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CharityComponent]
})
export class CharityModule { }
