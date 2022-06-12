import { Observable } from "rxjs";
import { CategoriesModel } from "../domain/categories";

export abstract class IcategoriesRepository {
    abstract getAllCategories(): Observable<CategoriesModel>;
    abstract CreateCategory(param: Partial<CategoriesModel>): Observable<CategoriesModel>;
    abstract DeleteCategory(param: number): Observable<void>;
  }