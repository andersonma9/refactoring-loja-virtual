import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { SharedModule } from "../shared/shared.module";
import { AdminToolbarComponent } from "./admin-toolbar/admin-toolbar.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminCategoriesComponent } from "./admin-categories/admin-categories.component";
import { AdminOffersComponent } from "./admin-offers/admin-offers.component";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { CategoriesListComponent } from "./admin-categories/categories-list/categories-list.component";
import { CategoriesRegisterComponent } from "./admin-categories/categories-register/categories-register.component";
import { CategoriesManageComponent } from "./admin-categories/categories-manage/categories-manage.component";

const adminRoutes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: AdminHomeComponent },
      {
        path: "categories",
        component: AdminCategoriesComponent,
        children: [
          { path: "", redirectTo: "list", pathMatch: "full" },
          { path: "list", component: CategoriesListComponent },
          { path: "register", component: CategoriesRegisterComponent },
          { path: "manage/:id", component: CategoriesManageComponent }
        ]
      },
      { path: "products", component: AdminProductsComponent },
      { path: "offers", component: AdminOffersComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminToolbarComponent,
    AdminHomeComponent,
    AdminCategoriesComponent,
    AdminOffersComponent,
    AdminProductsComponent,
    CategoriesListComponent,
    CategoriesRegisterComponent,
    CategoriesManageComponent
  ],
  imports: [CommonModule, RouterModule.forChild(adminRoutes), SharedModule],
  exports: [RouterModule]
})
export class AdminModule {}
