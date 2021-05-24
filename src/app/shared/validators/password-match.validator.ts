import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatch(password:string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = control.value !== control.parent?.get(password)?.value;
      console.log(forbidden);
      return forbidden ? {mismatch: true} : null;
    };
  }