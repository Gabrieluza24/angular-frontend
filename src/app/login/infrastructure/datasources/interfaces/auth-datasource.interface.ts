import { Observable } from "rxjs";
import { LoginCredentials, LoginResponse } from "../../models";

export abstract class IAuthDatasource {
    abstract login(credentials: LoginCredentials): Observable<LoginResponse>;
    abstract register(credentials: LoginCredentials): Observable<LoginResponse>;
}