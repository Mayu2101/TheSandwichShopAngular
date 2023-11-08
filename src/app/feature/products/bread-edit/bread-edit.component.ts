import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Bread } from '../models/bread.model';

@Component({
  selector: 'app-bread-edit',
  templateUrl: './bread-edit.component.html',
  styleUrls: ['./bread-edit.component.scss'],
})
export class BreadEditComponent {
  public breadEditForm: FormGroup;
  public isLoading = true;
  private mode: string;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.breadEditForm = new FormGroup({});
    this.mode = 'add';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.mode = id === '0' ? 'add' : 'edit';
      if (this.mode === 'edit') {
        this.productsService
          .getBread(id)
          .pipe(take(1))
          .subscribe((data: Bread) => {
            this.setFormValues(data);
            this.isLoading = false;
          });
      } else {
        this.setFormValues({
          breadTypeId: 'Auto Generated',
          description: '',
        });
        this.isLoading = false;
      }
    });
  }

  saveBread() {
    if (this.mode === 'add') {
      this.productsService.createBread(this.breadEditForm.value)
        .pipe(take(1))
        .subscribe(data => {
          this.router.navigate(['../products/bread']);
        });
    } else {
      this.productsService.updateBread(this.breadEditForm.value)
        .pipe(take(1))
        .subscribe(data => {
          this.router.navigate(['../products/bread']);
        });
    }
  }

  private setFormValues(bread: Bread) {
    this.breadEditForm = this.fb.group({
      breadTypeId: [bread.breadTypeId],
      description: [bread.description, [Validators.required]],
    });
  }
}
