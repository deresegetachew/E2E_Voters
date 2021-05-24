import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from '../../shared/models/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User;
  @Output()
  login = new EventEmitter<User>();
  constructor() {
    this.user = {
      password: "",
      userName: ""
    };
  }

  ngOnInit(): void {

  }
  onSubmit() {
    this.login.emit(this.user);
  }
}
