import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { CategoriesModel } from "../domain/categories";
import { IcategoriesRepository } from "../repositories/categories.repository";

@Injectable({
  providedIn: 'root'
})
export class UpdateCategory implements UseCase<Partial<CategoriesModel>, CategoriesModel> {

  constructor(private categoriesRepository: IcategoriesRepository) { }

  execute(params: Partial<CategoriesModel>): Observable<CategoriesModel> {
    return this.categoriesRepository.UpdateCategory(params);
  }
}