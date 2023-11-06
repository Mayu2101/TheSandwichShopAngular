import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shift-edit',
  templateUrl: './shift-edit.component.html',
  styleUrls: ['./shift-edit.component.scss']
})
export class ShiftEditComponent {

  shiftEditForm: FormGroup = this.fb.group({
    shiftGuid: ['', [Validators.required]],
    date: ['', [Validators.required]],
    type: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) { }


  saveShift() {

  }
}
