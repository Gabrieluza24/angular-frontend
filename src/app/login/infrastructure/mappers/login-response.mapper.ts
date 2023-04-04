import { Mapper } from "src/app/core/base/mapper";
import { LoginResponse } from "../models";
import { LoginResponseEntity } from "../../domain/entities";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
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