import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../models/user-info.model";
import { LoginResponse } from "../models/login-response.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { HeaderService } from "../services/header.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  userInfo: UserInfo;
  loginResponse: LoginResponse;

  sideMode: string = "over";

  opened: boolean = false;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    if (this.checkLogin()) {
      this.setUserInfo();
    }
  }

  toggleSideNav(ev) {
    this.opened = !this.opened;
  }

  changed(ev) {
    this.opened = ev;
  }

  setUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.headerService.httpOptions.headers = this.headerService.httpOptions.headers.set(
      "Authorization",
      `JWT ${this.loginResponse.token}`
    );
  }

  checkLogin(): boolean {
    return (
      localStorage.getItem("userInfo") != null ||
      localStorage.getItem("userInfo") != undefined
    );
  }
}
