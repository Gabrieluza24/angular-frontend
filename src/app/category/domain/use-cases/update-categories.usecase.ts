import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core/base";
import { CategoriesModel } from "../../infrastructure/models/categories";
import { ICategoriesRepository } from "../repositories/categories.repository";

@Injectable({
  providedIn: 'root'
})
export class UpdateCategory implements UseCase<Partial<CategoriesModel>, CategoriesModel> {

  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(params: Partial<CategoriesModel>): Observable<CategoriesModel> {
    return this.categoriesRepository.UpdateCategory(params);
  }
}