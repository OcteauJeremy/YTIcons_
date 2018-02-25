import {Attribute, Directive} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[equalValidatorDirective][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidatorDirective,
      multi: true
    }
  ]
})


export class EqualValidatorDirective implements Validator {
  constructor(@Attribute('equalValidatorDirective') public validateEqual: string,
              @Attribute('reverse') public reverse: string) {
  }

  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true: false;
  }

  validate(c: AbstractControl): { [key: string]: any } {

    // self value
    let v = c.value;

    // control vlaue
    let e = c.root.get(this.validateEqual);


    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      console.log('pass here');
      return {
        validateEqual: false
      }
    }

    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['validateEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({validateEqual: false});
    }

    return null;
  }
}
