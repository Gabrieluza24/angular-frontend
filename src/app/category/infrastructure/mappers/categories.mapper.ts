import { Mapper } from "src/app/core/base/mapper";
import { CategoriesModel } from "src/app/category/infrastructure/models/categories";
import { CategoriesEntity } from "../../../category/domain/entities/categories.entity";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoriesMapper extends Mapper <CategoriesEntity, CategoriesModel> {
    mapFrom(param: CategoriesEntity): CategoriesModel {
      return {
        id: param.id,
        code: param.code,
        title: param.title,
        description: param.description,
        idParentCategory: param.idParentCategory,
        createDate: new Date(param.createDate),
        UpdateDate: new Date(param.updateDate)
      };
    }
  
    mapTo(param: CategoriesModel): CategoriesEntity {
      return {
        id: param.id ?? 0,
        code: param.code,
        title: param.title,
        description: param.description,
        idParentCategory: param.idParentCategory,
        createDate: param.createDate,
        updateDate: param.UpdateDate,
      };
    }
  }