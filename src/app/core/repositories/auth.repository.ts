import { Observable } from "rxjs";
import { LoginCredentials, LoginResponse } from "../domain/auth.model";

export abstract class authRepository {
    abstract login(LoginCredentials:LoginCredentials): Observable<LoginResponse>;
  }