import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { UserInfo } from "src/app/models/user-info.model";
import { LoginResponse } from "src/app/models/login-response.model";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Output() sideNavState$ = new EventEmitter();

  @Input() sideNavState;

  @Input() userInfo: UserInfo;

  @Input() loginResponse: LoginResponse;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  checkLoginRoute() {
    return window.location.href.includes("auth");
  }

  checkLogin(): boolean {
    return (
      localStorage.getItem("userInfo") != null ||
      localStorage.getItem("userInfo") != undefined
    );
  }

  toggleSideNav() {
    this.sideNavState$.emit(!this.sideNavState);
  }

  logout() {
    this.loginService.logout();
  }

  saveRoute() {
    this.loginService.previousUrl = this.router.url;
  }
}
