import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  login = new EventEmitter<User>();

  medias:string[] =[
    'Google',
    'Facebook'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(user: User) {
    this.login.emit(user);
  }
}
