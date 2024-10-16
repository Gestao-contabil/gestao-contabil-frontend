import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {CoreModule} from "../core/core.module";
import {PrimeTemplate} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        PrimeTemplate,
        ButtonModule,
        InputTextModule,
        PasswordModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
    ]
})
export class FeatureModule {}