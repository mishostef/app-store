import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    }
  ]
})
export class PasswordMatchDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return control.value.email === control.value.reemail ? null : { passwordMatch: true };
  }
}
