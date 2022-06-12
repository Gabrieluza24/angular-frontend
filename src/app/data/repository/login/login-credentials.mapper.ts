import { Mapper } from "src/app/core/base/mapper";
import { LoginCredentials } from "src/app/core/domain/auth.model";
import { LoginCredentialsEntity } from "./login-credentials.entity";

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