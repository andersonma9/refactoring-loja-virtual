import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../models/user-info.model";
import { LoginResponse } from "../models/login-response.model";
import { HeaderService } from "../services/header.service";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  routesList: object[] = [
    { name: "Início", address: "home" },
    { name: "Categorias", address: "categories" },
    { name: "Ofertas", address: "offers" },
    { name: "Produtos", address: "products" }
  ];

  userInfo: UserInfo;
  loginResponse: LoginResponse;

  sideMode: string = "side";

  opened: boolean = false;

  mdScreen: boolean;

  constructor(
    private headerService: HeaderService,
    private bko: BreakpointObserver
  ) {}

  ngOnInit() {
    this.bko.observe("(min-width: 768px)").subscribe(res => {
      res.matches ? (this.sideMode = "side") : (this.sideMode = "over");
      res.matches ? (this.opened = true) : (this.opened = false);
    });
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

  closeSideNav() {
    if (this.mdScreen) {
      this.opened = false;
    }
  }

  setUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.headerService.httpOptions.headers = this.headerService.httpOptions.headers.set(
      "Authorization",
      `JWT ${this.loginResponse.token}`
    );
  }

  changeSidenavState(ev) {
    this.opened = ev;
  }

  checkLogin(): boolean {
    return (
      localStorage.getItem("userInfo") != null ||
      localStorage.getItem("userInfo") != undefined
    );
  }
}
