import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { IcategoriesRepository } from "../repositories/categories.repository";

@Injectable({
  providedIn: 'root'
})
export class DeleteCategory implements UseCase<number, void> {

  constructor(private categoriesRepository: IcategoriesRepository) { }

  execute(params:number): Observable<void> {
    return this.categoriesRepository.DeleteCategory(params);
  }
}