import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories-register',
  templateUrl: './categories-register.component.html',
  styleUrls: ['./categories-register.component.scss']
})
export class CategoriesRegisterComponent implements OnInit {

  categoryRegisterForm: FormGroup;

  constructor(private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.categoryRegisterForm = this.fb.group({
      nome: this.fb.control("", [Validators.required])
    })
  }

  registerCategory(form) {
    this.categoriesService.registerCategory(form.value).subscribe(
      res => {
        this.router.navigate(["../"], {relativeTo: this.activatedRoute})
        this.snackBar.open("Categoria cadastrada com sucesso!", "Fechar", {
          duration: 3000
        })
      }
    )
  }

}
