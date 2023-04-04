import { Observable } from "rxjs";
import { CategoriesModel } from "../../infrastructure/models/categories";

export abstract class ICategoriesRepository {
  abstract getAllCategories(): Observable<CategoriesModel>;
  abstract CreateCategory(param: Partial<CategoriesModel>): Observable<CategoriesModel>;
  abstract UpdateCategory(param: Partial<CategoriesModel>): Observable<CategoriesModel>;
  abstract DeleteCategory(param: number): Observable<void>;
}