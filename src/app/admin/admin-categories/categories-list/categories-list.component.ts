import { Component, OnInit, ViewChild } from "@angular/core";
import { CategoriesService } from "src/app/services/categories.service";
import { MatTableDataSource } from "@angular/material/table";
import { CategoryModel } from "src/app/models/category.model";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"]
})
export class CategoriesListComponent implements OnInit {
  displayedColumns: string[] = ["name", "actions"];

  dataSource: any;

  categoriesList: CategoryModel[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategoriesList().subscribe(list => {
      this.categoriesList = list;
      this.dataSource = new MatTableDataSource(this.categoriesList);
      this.dataSource.paginator = this.paginator;
      
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
