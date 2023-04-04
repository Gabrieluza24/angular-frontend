import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoginResposeMapper } from "../mappers";
import { IAuthDatasource } from "../datasources";
import { IAuthRepository } from "../../domain/repositories";
import { LoginCredentialsEntity, LoginResponseEntity } from "../../domain/entities";

@Injectable()
export class AuthRepository implements IAuthRepository {

    constructor(
        private datasource: IAuthDatasource,
        private LoginResponseMapper: LoginResposeMapper,
    ) { }

    login(credentials: LoginCredentialsEntity): Observable<LoginResponseEntity> {
        return this.datasource.login(credentials).pipe(map(this.LoginResponseMapper.mapFrom));
    }

    register(credentials: LoginCredentialsEntity): Observable<LoginResponseEntity> {
        return this.datasource.register(credentials).pipe(map(this.LoginResponseMapper.mapFrom));
    }
}