import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeaderService } from "./header.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CategoryModel } from "../models/category.model";

const api = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor(
    private httpClient: HttpClient,
    private headerService: HeaderService
  ) {}

  getCategoriesList(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(`${api}/categorias/`, {
      headers: this.headerService.httpOptions.headers
    });
  }

  registerCategory(data): Observable<CategoryModel> {
    return this.httpClient.post<CategoryModel>(`${api}/categorias/`, data, {
      headers: this.headerService.httpOptions.headers
    });
  }

  removeCategory(id): Observable<any> {
    return this.httpClient.delete<any>(`${api}/categorias/${id}/`, {
      headers: this.headerService.httpOptions.headers
    });
  }

  getCategoryInfo(id): Observable<CategoryModel> {
    return this.httpClient.get<CategoryModel>(`${api}/categorias/${id}/info/`);
  }
}
