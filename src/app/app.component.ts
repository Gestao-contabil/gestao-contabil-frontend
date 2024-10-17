import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CoreModule} from "./core/core.module";
import {FeatureModule} from "./feature/feature.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, FeatureModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestao-contabil-frontend';
}
