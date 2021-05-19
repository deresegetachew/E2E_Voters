import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from './container/register-page/register-page.component';
import { RegisterComponent } from './component/register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
