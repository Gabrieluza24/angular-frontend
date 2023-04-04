import { Injectable } from "@angular/core";
import { IAuthDatasource } from "..";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginCredentials, LoginResponse } from "../../models";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthDataSource implements IAuthDatasource {
    constructor(private client: HttpClient) { }

    public login(credentials: LoginCredentials): Observable<LoginResponse> {
         return this.client.post<LoginResponse>(`${environment.serverUrl}/Auth/login`, credentials)
    }
    public register(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.client.post<LoginResponse>(`${environment.serverUrl}/users`, credentials)
    }
}