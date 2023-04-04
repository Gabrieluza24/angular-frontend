import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { ICategoriesRepository } from "../repositories/categories.repository";
import { UseCase } from "src/app/core/base";

@Injectable({
  providedIn: 'root'
})
export class DeleteCategory implements UseCase<number, void> {

  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(params: number): Observable<void> {
    return this.categoriesRepository.DeleteCategory(params)
  }
}