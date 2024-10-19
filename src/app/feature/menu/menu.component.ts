import { Component } from '@angular/core';
import {AuthService} from "../../core/entities/authentication/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private authService: AuthService, protected router: Router) {
  }

  public userSidebarVisible: boolean = false;

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  protected readonly console = console;
}
