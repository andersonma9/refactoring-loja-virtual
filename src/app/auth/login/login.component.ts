import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { concat, merge } from "rxjs";
import { HeaderService } from "src/app/services/header.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      username: this.fb.control("", [Validators.required]),
      password: this.fb.control("", [Validators.required])
    });
  }

  login(loginForm: FormGroup) {
    this.loginService.doLogin(loginForm.value).subscribe(res => {
      this.headerService.httpOptions.headers = this.headerService.httpOptions.headers.set(
        "Authorization",
        `JWT ${res.token}`
      );
      localStorage.setItem("loginResponse", JSON.stringify(res));
      this.userInfo(res.cliente);
    });
  }

  userInfo(id) {
    this.loginService.getUserInfo(id).subscribe(res => {
      localStorage.setItem("userInfo", JSON.stringify(res));
      this.router.navigate([this.loginService.previousUrl])
    });
  }
}
