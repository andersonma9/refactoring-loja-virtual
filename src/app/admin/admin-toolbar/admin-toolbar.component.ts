import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { UserInfo } from "src/app/models/user-info.model";
import { LoginResponse } from "src/app/models/login-response.model";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-admin-toolbar",
  templateUrl: "./admin-toolbar.component.html",
  styleUrls: ["./admin-toolbar.component.scss"]
})
export class AdminToolbarComponent implements OnInit {
  @Output() sideNavState$ = new EventEmitter();

  @Input() sideNavState;

  @Input() userInfo: UserInfo;

  @Input() loginResponse: LoginResponse;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  toggleSideNav() {
    this.sideNavState$.emit(!this.sideNavState);
  }
  logout() {
    this.loginService.logout();
  }
}
