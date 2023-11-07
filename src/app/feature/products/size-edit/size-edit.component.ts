import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Size } from '../models/size.model';

@Component({
  selector: 'app-size-edit',
  templateUrl: './size-edit.component.html',
  styleUrls: ['./size-edit.component.scss'],
})
export class SizeEditComponent {
  public sizeEditForm: FormGroup;
  private mode: string;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.sizeEditForm = new FormGroup({});
    this.mode = 'add';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.mode = id === '0' ? 'add' : 'edit';
      if (this.mode === 'edit') {
        this.productsService
          .getSize(id)
          .pipe(take(1))
          .subscribe((data: Size) => {
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

  saveSize() {
    if (this.mode === 'add') {
      this.productsService.createSize(this.sizeEditForm.value);
    } else {
      this.productsService.updateSize(this.sizeEditForm.value);
    }
  }

  private setFormValues(size: Size) {
    this.sizeEditForm = this.fb.group({
      id: [size.id],
      description: [size.description, [Validators.required]],
    });
  }
}
