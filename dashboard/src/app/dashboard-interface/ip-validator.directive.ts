import { Directive, forwardRef ,Attribute} from '@angular/core';
import {  NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[ipValidator][formControlName],[ipValidator][formControl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>{
          IpValidatorDirective
      }),
      multi: true
    }] 
})
export class IpValidatorDirective implements Validator {

  constructor(@Attribute('ipValidator') public ipValidator:string) {
  }
  validate(control: FormControl) {
    let ipRegexp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let isValid = ipRegexp.test(control.value);
    if (isValid) {
      return null;
    } else {
      return {
        ipValidator: false
      };
    }
  }

}
