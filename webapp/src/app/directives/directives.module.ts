import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validator.directive';
import { EqualValidatorDirective } from './equal-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailValidatorDirective, EqualValidatorDirective],
  exports: [
    EmailValidatorDirective,
    EqualValidatorDirective
  ],
})
export class DirectivesModule { }