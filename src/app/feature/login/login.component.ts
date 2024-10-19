import { Component } from '@angular/core';
import {AuthService} from "../../core/entities/authentication/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  public login() {
    localStorage.setItem('token', '123');
    this.router.navigate(['/home'])
  }
}
