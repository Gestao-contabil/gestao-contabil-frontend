import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./entities/authentication/auth.service";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        AuthService
    ],
})
export class CoreModule { }