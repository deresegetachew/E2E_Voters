import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.scss']
})
export class LoginSocialComponent implements OnInit {
  
  @Input()
  medias: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
