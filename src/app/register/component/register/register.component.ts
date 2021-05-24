import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/validators/password-match.validator';
import { Register } from '../../shared/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  register = new EventEmitter<Register>();

  registerEntity: Register;

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    middleName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    password: new FormControl('', [Validators.required ]),
    confirmPassword: new FormControl('', [Validators.required, passwordMatch('password')]),
    subCity: new FormControl('', [Validators.required]),
    woreda: new FormControl(''),
    houseNumber: new FormControl(''),
    idNumber: new FormControl(''),
  })

  constructor() {
    this.registerEntity = {
      firstName: "",
      middleName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      subCity: "",
      woreda: "",
      houseNumber: "",
      idNumber: ""
    }
  }

  ngOnInit(): void {
    
    
  }

  onSubmit(): void {
    this.registerEntity = {
      firstName: this.registerForm.controls.firstName.value,
      middleName: this.registerForm.controls.middleName.value,
      lastName: this.registerForm.controls.lastName.value,
      userName: this.registerForm.controls.userName.value,
      password: this.registerForm.controls.password.value,
      confirmPassword: this.registerForm.controls.confirmPassword.value,
      subCity: this.registerForm.controls.subCity.value,
      woreda: this.registerForm.controls.woreda.value,
      houseNumber: this.registerForm.controls.houseNumber.value,
      idNumber: this.registerForm.controls.idNumber.value,
    }
    this.register.emit(this.registerEntity);

  }

}
