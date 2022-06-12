import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoginCredentials, LoginResponse } from "src/app/core/domain/auth.model";
import { authRepository } from "src/app/core/repositories/auth.repository";
import { environment } from "src/environments/environment";
import { LoginCredentialsMapper } from "./login-credentials.mapper";
import { LoginResponseEntity } from "./login-response.entity";
import { LoginResposeMapper } from "./login-response.mapper";

@Injectable()
export class authLoginRepository extends authRepository {
    LoginCredentialMapper = new LoginCredentialsMapper();
    LoginResponseMapper = new LoginResposeMapper();

    constructor(private http: HttpClient) {
        super();
    }

    login(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.http.post<LoginResponseEntity>(`${environment.serverUrl}/Auth/login`, credentials)
            .pipe(map(this.LoginResponseMapper.mapFrom));
    }
}