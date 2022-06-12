import { Observable } from "rxjs";
import { CategoriesModel } from "../domain/categories";

export abstract class IcategoriesRepository {
    abstract getAllCategories(): Observable<CategoriesModel>;
  }