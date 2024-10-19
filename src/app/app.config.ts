import {ApplicationConfig, inject, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {LoginComponent} from "./feature/login/login.component";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {HomeComponent} from "./feature/home/home.component";
import {AuthGuard} from "./core/entities/authentication/auth.guard";
import {LoginGuard} from "./core/entities/authentication/login.guard";
import {MessageService} from "primeng/api";

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [() => inject(LoginGuard).canActivate()]  },
  { path: 'home', component: HomeComponent, canActivate: [() => inject(AuthGuard).canActivate()]  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
    MessageService
  ]
};