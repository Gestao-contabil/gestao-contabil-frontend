import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CoreModule} from "./core/core.module";
import {FeatureModule} from "./feature/feature.module";
import {Button} from "primeng/button";
import {MessageService, PrimeTemplate} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {MainComponent} from "./main/main.component";
import {NgIf} from "@angular/common";
import {AuthService} from "./core/entities/authentication/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, FeatureModule, Button, PrimeTemplate, ToolbarModule, MainComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
