import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Topping } from '../models/topping.model';

@Component({
  selector: 'app-topping-edit',
  templateUrl: './topping-edit.component.html',
  styleUrls: ['./topping-edit.component.scss'],
})
export class ToppingEditComponent {
  public toppingEditForm: FormGroup;
  private mode: string;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.toppingEditForm = new FormGroup({});
    this.mode = 'add';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.mode = id === '0' ? 'add' : 'edit';
      if (this.mode === 'edit') {
        this.productsService
          .getTopping(id)
          .pipe(take(1))
          .subscribe((data: Topping) => {
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

  saveTopping() {
    if (this.mode === 'add') {
      this.productsService.createTopping(this.toppingEditForm.value);
    } else {
      this.productsService.updateTopping(this.toppingEditForm.value);
    }
  }

  private setFormValues(topping: Topping) {
    this.toppingEditForm = this.fb.group({
      id: [topping.id],
      description: [topping.description, [Validators.required]],
    });
  }
}
