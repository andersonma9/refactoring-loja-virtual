import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResponse } from "../models/login-response.model";
import { HeaderService } from "./header.service";
import { Router } from "@angular/router";

const api: string = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class LoginService {
  previousUrl: string;
  constructor(
    private httpClient: HttpClient,
    private headerService: HeaderService,
    private router: Router
  ) {}

  doLogin(data): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${api}/login/`, data);
  }

  getUserInfo(id) {
    return this.httpClient.get(`${api}/clientes/${id}/`, {
      headers: this.headerService.httpOptions.headers
    });
  }

  logout() {
    localStorage.removeItem("loginResponse");
    localStorage.removeItem("userInfo");
    this.router.navigate([""]);
  }
}
