import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { CategoriesModel } from "../domain/categories";
import { IcategoriesRepository } from "../repositories/categories.repository";

@Injectable({
  providedIn: 'root'
})
export class getCategories implements UseCase<void, CategoriesModel> {

  constructor(private categoriesRepository: IcategoriesRepository) { }

  execute(params: void): Observable<CategoriesModel> {
    return this.categoriesRepository.getAllCategories();
  }
}