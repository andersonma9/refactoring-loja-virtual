import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoriesService } from "src/app/services/categories.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CategoryModel } from "src/app/models/category.model";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-categories-manage",
  templateUrl: "./categories-manage.component.html",
  styleUrls: ["./categories-manage.component.scss"]
})
export class CategoriesManageComponent implements OnInit, OnDestroy {
  id: number;
  destroy$: Subject<any> = new Subject();

  categoryInfo: CategoryModel;

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getCategoryInfo();
  }

  getCategoryInfo() {
    this.categoriesService
      .getCategoryInfo(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.categoryInfo = res;
        console.log(res);
      });
  }

  confirmRemoval() {
    let confirmation = this.snackBar.open("Deseja realmente remover?", "Sim", {
      duration: 3000,
      panelClass: 'whiteActionButton'
    })
    confirmation.onAction().subscribe(
      confirm => {
        this.removeCategory(this.id);
      }
    )
  }

  removeCategory(id) {
    this.categoriesService
      .removeCategory(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.router.navigate(["../../"], { relativeTo: this.activatedRoute });
        this.snackBar.open(this.categoryInfo.nome + ": categoria removida com sucesso!", "Fechar", {
          duration: 3000
        })
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
