import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap } from "rxjs";
import { CategoriesModel } from "src/app/core/domain/categories";
import { IcategoriesRepository } from "src/app/core/repositories/categories.repository";
import { environment } from "src/environments/environment";
import { CategoriesEntity } from "./categories.entity";
import { CategoriesMapper } from "./categories.mapper";


@Injectable()
export class categoriesRepository extends IcategoriesRepository {
    catergoriesMapper = new CategoriesMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getAllCategories(): Observable<CategoriesModel> {
        return this.http.get<CategoriesEntity[]>(`${environment.serverUrl}/categories`)
            .pipe(mergeMap((item) => item))
            .pipe(map(this.catergoriesMapper.mapFrom));
    }

    CreateCategory(param: Partial<CategoriesModel>): Observable<CategoriesModel> {
        return this.http.post<CategoriesEntity>(`${environment.serverUrl}/categories`, param)
            .pipe(map(this.catergoriesMapper.mapFrom));
    }

    DeleteCategory(param: number): Observable<void> {
        return this.http.delete<void>(`${environment.serverUrl}/categories/${param}`);
    }

}