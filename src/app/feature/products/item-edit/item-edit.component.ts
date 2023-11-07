import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  public basePriceEditForm: FormGroup;
  public categories: string[];
  private mode: string;

  toppings = new FormControl('');
  public toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.itemEditForm = new FormGroup({});
    this.basePriceEditForm = new FormGroup({});
    this.mode = 'add';
    this.categories = ['Drink', 'Sandwich', 'Dessert'];
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
          category: '',
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
      category: [item.category, [Validators.required]],
    });
  }
}
