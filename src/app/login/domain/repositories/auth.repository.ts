import { Observable } from "rxjs";
import { LoginCredentialsEntity, LoginResponseEntity } from "src/app/login/domain/entities";

export abstract class IAuthRepository {
  abstract login(credentials: LoginCredentialsEntity): Observable<LoginResponseEntity>;
  abstract register(credentials: LoginCredentialsEntity): Observable<LoginResponseEntity>;
}