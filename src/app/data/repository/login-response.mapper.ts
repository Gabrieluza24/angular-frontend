import { Mapper } from "src/app/core/base/mapper";
import { LoginResponse } from "src/app/core/domain/auth.model";
import { LoginResponseEntity } from "./login-response.entity";

export class LoginResposeMapper extends Mapper<LoginResponseEntity, LoginResponse> {
  mapFrom(param: LoginResponseEntity): LoginResponse {
    return {
      id: param.id,
      email: param.email,
      createDate: param.createDate
    };
  }

  mapTo(param: LoginResponse): LoginResponseEntity {
    return {
      id: param.id,
      email: param.email,
      createDate: param.createDate
    };
  }
}