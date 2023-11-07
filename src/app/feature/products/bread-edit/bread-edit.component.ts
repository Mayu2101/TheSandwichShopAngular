import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Bread } from '../models/bread.model';

@Component({
  selector: 'app-bread-edit',
  templateUrl: './bread-edit.component.html',
  styleUrls: ['./bread-edit.component.scss'],
})
export class BreadEditComponent {
  public breadEditForm: FormGroup;
  private mode: string;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
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
          });
      } else {
        this.setFormValues({
          id: 'Auto Generated',
          description: '',
        });
      }
    });
  }

  saveBread() {
    if (this.mode === 'add') {
      this.productsService.createBread(this.breadEditForm.value);
    } else {
      this.productsService.updateBread(this.breadEditForm.value);
    }
  }

  private setFormValues(bread: Bread) {
    this.breadEditForm = this.fb.group({
      id: [bread.id],
      description: [bread.description, [Validators.required]],
    });
  }
}
