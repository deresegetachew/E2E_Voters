import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../../shared/models/register.model';
import { RegisterService } from '../../shared/services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private registerService: RegisterService , private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(register:Register){
    if(this.registerService.register(register)){      
      this.router.navigate(['/login']);
    }
    else
    {
      console.log("Oops registration was not succesful, please try again!");
    }
  }
}
