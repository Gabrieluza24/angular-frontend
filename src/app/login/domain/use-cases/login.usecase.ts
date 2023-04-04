import { Injectable } from "@angular/core";
import { tap, Observable } from "rxjs";
import { UseCase } from "../../../core/base";
import { LoginCredentialsEntity, LoginResponseEntity } from "../entities";
import { IAuthRepository } from "../repositories";

@Injectable()
  export class LoginUseCase implements UseCase<LoginCredentialsEntity, LoginResponseEntity> {
  
    constructor(private authRepository: IAuthRepository) { }
  
    execute(body: LoginCredentialsEntity): Observable<LoginResponseEntity> {

     return this.authRepository.login(body).pipe(tap((response => {
        sessionStorage.setItem('user',response.email.toString());
      })));
    }
  }