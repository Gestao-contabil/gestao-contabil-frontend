import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {LoginComponent} from "./feature/login/login.component";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: []  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
  ]
};