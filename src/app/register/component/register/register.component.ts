import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/validators/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    middleName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    userName: new FormControl('',[Validators.required, Validators.maxLength(5)]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    subCity: new FormControl('',[Validators.required]),
    woreda: new FormControl(''),
    houseNumber: new FormControl(''),
    idNumber: new FormControl('')
  })

  // get password():any {
  //   return this.registerForm.get('firstName');
  // }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
