import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShiftService } from '../shift.service';
import { EmployeeShift } from '../employee-shift.model';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-shift-edit',
  templateUrl: './shift-edit.component.html',
  styleUrls: ['./shift-edit.component.scss'],
})
export class ShiftEditComponent implements OnInit {
  public shiftEditForm: FormGroup;
  private mode: string;

  constructor(
    private shiftService: ShiftService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.shiftEditForm = new FormGroup({});
    this.mode = 'add';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];
      this.mode = id === '0' ? 'add' : 'edit';
      if (this.mode === 'edit') {
        this.shiftService
          .getEmployeeShift(id)
          .pipe(take(1))
          .subscribe((data: EmployeeShift) => {
            this.setFormValues(data);
          });
      } else {
        this.setFormValues({
          id: '',
          employeeId: '123',
          shiftId: '',
          shiftType: '',
          shiftDate: new Date(),
        });
      }
    });
  }

  saveShift() {
    if (this.mode === 'add') {
      this.shiftService.createEmployeeShift(this.shiftEditForm.value);
    } else {
      this.shiftService.updateEmployeeShift(this.shiftEditForm.value);
    }
  }

  private setFormValues(employeeShift: EmployeeShift) {
    this.shiftEditForm = this.fb.group({
      id: [employeeShift.id, [Validators.required]],
      employeeId: [employeeShift.employeeId, [Validators.required]],
      shiftId: [employeeShift.shiftId, [Validators.required]],
    });
  }
}
