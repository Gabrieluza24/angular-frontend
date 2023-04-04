import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap } from "rxjs";
import { CategoriesModel } from "src/app/category/infrastructure/models/categories";
import { environment } from "src/environments/environment";
import { CategoriesEntity } from "../../domain/entities/categories.entity";
import { ICategoriesRepository } from "../../domain/repositories/categories.repository";
import { CategoriesMapper } from "../mappers/categories.mapper";


@Injectable()
export class categoriesRepository implements ICategoriesRepository {

    constructor(private http: HttpClient, 
        private catergoriesMapper: CategoriesMapper) {
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

    UpdateCategory(param: Partial<CategoriesModel>): Observable<CategoriesModel> {
        return this.http.put<CategoriesEntity>(`${environment.serverUrl}/categories`, param)
            .pipe(map(this.catergoriesMapper.mapFrom));
    }

    DeleteCategory(param: number): Observable<void> {
        return this.http.delete<void>(`${environment.serverUrl}/categories/${param}`);
    }

}