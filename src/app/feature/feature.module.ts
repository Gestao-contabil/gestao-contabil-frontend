import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {CoreModule} from "../core/core.module";
import {PrimeTemplate} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {SidebarModule} from "primeng/sidebar";
import {ToolbarModule} from "primeng/toolbar";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        PrimeTemplate,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        SidebarModule,
        ToolbarModule,
    ],
    declarations: [
        LoginComponent,
        HomeComponent,
        MenuComponent
    ],
    exports: [
        MenuComponent,
        LoginComponent
    ],
    providers: [
    ]
})
export class FeatureModule {}