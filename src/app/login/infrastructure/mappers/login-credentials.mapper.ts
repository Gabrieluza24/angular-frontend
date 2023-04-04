import { Mapper } from "src/app/core/base/mapper";
import { LoginCredentials } from "../models";
import { LoginCredentialsEntity } from "../../domain/entities";

export class LoginCredentialsMapper extends Mapper <LoginCredentialsEntity, LoginCredentials> {
    mapFrom(param: LoginCredentialsEntity): LoginCredentials {
      return {
        email: param.email,
        password: param.password
      };
    }
  
    mapTo(param: LoginCredentials): LoginCredentialsEntity {
      return {
        email: param.email,
        password: param.password
      };
    }
  }