import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatch(password: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = control.value !== password;
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }