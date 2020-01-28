import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthRootComponent } from "./auth/auth-root/auth-root.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [{ path: "", component: HomeComponent }]
  },
  {
    path: "auth",
    component: AuthRootComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
