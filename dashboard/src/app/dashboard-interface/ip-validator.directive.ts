import { Directive } from '@angular/core';
import { ValidatorFn, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[ipValidator][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IpValidatorDirective,
      multi: true
    }] 
})
export class IpValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.ipValidator();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }

  ipValidator(): ValidatorFn {
    return (control: FormControl) => {

      let ipRegexp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      let isValid = ipRegexp.test(control.value);
      if (isValid) {
        return null;
      } else {
        return {
          ipValidator: {
            valid: false
          }
        };
      }
    }
  }

}
