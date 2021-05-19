import { Injectable } from '@angular/core';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[];
  constructor() {
    this.users = [{ userName: "john", password: "123" },
    { userName: "jane", password: "123" },
    { userName: "alex", password: "123" }];
  }

  login(user: User): boolean {
    if (this.users.find(t => t.userName == user.userName && t.password == user.password)) {
      return true;
    }
    return false;
  }
}
