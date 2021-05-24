import { Injectable } from '@angular/core';
import { User } from 'src/app/login/shared/models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  users: User[];

  constructor() { 
    this.users = [{ userName: "john", password: "123" },
    { userName: "jane", password: "123" },
    { userName: "alex", password: "123" }];
  }

  register(register: Register) : boolean {

    if(this.users.find(u => u.userName === register.userName))
    {
      console.log("Username"+ register.userName + " not available.");
      return false;
    }
    else if(register.password.length < 8)
    {
      console.log("Password must be atleast 8 characters.")
      return false;
    }
    else
    {
      console.log("Welcome to votes " + register.firstName + " " + register.lastName);
      return true;
    }
  }
}
