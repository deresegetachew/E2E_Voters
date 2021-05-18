import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './container/login-page/login-page.component';
import { LoginComponent } from './component/login/login.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginSocialComponent } from './component/login-social/login-social.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent,
    LoginFormComponent,
    LoginSocialComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
