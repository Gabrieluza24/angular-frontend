import { Observable } from "rxjs";
import { LoginCredentials, LoginResponse } from "../domain/auth.model";

export abstract class authRepository {
    abstract login(credentials:LoginCredentials): Observable<LoginResponse>;
    abstract register(credentials:LoginCredentials): Observable<LoginResponse>;
  }