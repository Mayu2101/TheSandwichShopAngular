import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent {
  public itemEditForm: FormGroup;
  private mode: string;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.itemEditForm = new FormGroup({});
    this.mode = 'add';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.mode = id === '0' ? 'add' : 'edit';
      if (this.mode === 'edit') {
        this.productsService
          .getItem(id)
          .pipe(take(1))
          .subscribe((data: Item) => {
            this.setFormValues(data);
          });
      } else {
        this.setFormValues({
          id: 'Auto Generated',
          description: '',
          type: '',
        });
      }
    });
  }

  saveItem() {
    if (this.mode === 'add') {
      this.productsService.createItem(this.itemEditForm.value);
    } else {
      this.productsService.updateItem(this.itemEditForm.value);
    }
  }

  private setFormValues(item: Item) {
    this.itemEditForm = this.fb.group({
      id: [item.id],
      description: [item.description, [Validators.required]],
    });
  }
}
