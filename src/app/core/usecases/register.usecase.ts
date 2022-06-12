import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { LoginCredentials, LoginResponse } from "../domain/auth.model";
import { authRepository } from "../repositories/auth.repository";

@Injectable({
    providedIn: 'root'
  })
  export class RegisterUseCase implements UseCase<LoginCredentials, LoginResponse> {
  
    constructor(private authRepository: authRepository) { }
  
    execute(params: LoginCredentials): Observable<LoginResponse> {
      return this.authRepository.register(params);
    }
  }