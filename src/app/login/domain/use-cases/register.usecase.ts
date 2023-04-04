import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core/base";
import { IAuthRepository } from "../repositories";
import { LoginCredentialsEntity, LoginResponseEntity } from "../entities";

@Injectable()
  export class RegisterUseCase implements UseCase<LoginCredentialsEntity, LoginResponseEntity> {
  
    constructor(private authRepository: IAuthRepository) { }
  
    execute(params: LoginCredentialsEntity): Observable<LoginResponseEntity> {
      return this.authRepository.register(params);
    }
  }