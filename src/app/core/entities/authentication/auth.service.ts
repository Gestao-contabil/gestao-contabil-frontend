import {EntityService} from "../entity-service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {AuthDto} from "./auth-dto";

@Injectable({
    providedIn: "root",
})
export class AuthService extends EntityService<AuthDto> {

    constructor(
        protected override http: HttpClient,
        protected override messageService: MessageService,
    ) {
        super(http, messageService, 'http://localhost:8080/auth/token');
    }

    public login(loginDto: AuthDto) {
        return this.http.post<AuthDto>(`${this.entityUrl}`, loginDto).pipe(this.defaultCatch());
    }

    public isLoggedIn() {
        return !!localStorage.getItem('token');
    }
}