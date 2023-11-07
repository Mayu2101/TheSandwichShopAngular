import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Combo } from '../models/combo.model';

@Component({
  selector: 'app-combo-edit',
  templateUrl: './combo-edit.component.html',
  styleUrls: ['./combo-edit.component.scss'],
})
export class ComboEditComponent {
  public comboEditForm: FormGroup;
  private mode: string;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.comboEditForm = new FormGroup({});
    this.mode = 'add';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.mode = id === '0' ? 'add' : 'edit';
      if (this.mode === 'edit') {
        this.productsService
          .getCombo(id)
          .pipe(take(1))
          .subscribe((data: Combo) => {
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

  saveCombo() {
    if (this.mode === 'add') {
      this.productsService.createCombo(this.comboEditForm.value);
    } else {
      this.productsService.updateCombo(this.comboEditForm.value);
    }
  }

  private setFormValues(combo: Combo) {
    this.comboEditForm = this.fb.group({
      id: [combo.id],
      description: [combo.description, [Validators.required]],
    });
  }
}
