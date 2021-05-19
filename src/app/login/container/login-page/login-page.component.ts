import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/login.model';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(user: User) {
    if(this.loginService.login(user))
    {
      console.log("Welcome " + user.userName + "!");
      this.router.navigate(['/vote']);
    }
    else{
      console.log("Oops " + user.userName + " not found!")
    }
  }
}
