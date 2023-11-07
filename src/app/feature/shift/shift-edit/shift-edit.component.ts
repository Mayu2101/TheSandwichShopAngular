import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShiftService } from '../shift.service';
import { EmployeeShift } from '../employee-shift.model';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Shift } from '../shift.model';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-shift-edit',
  templateUrl: './shift-edit.component.html',
  styleUrls: ['./shift-edit.component.scss'],
})
export class ShiftEditComponent implements OnInit {
  public shiftEditForm: FormGroup;
  public availableShifts: Shift[];
  private mode: string;

  constructor(
    private shiftService: ShiftService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.shiftEditForm = new FormGroup({});
    this.mode = 'add';
    this.availableShifts = [];
  }

  ngOnInit(): void {
    this.shiftService
      .listAvailableShifts()
      .pipe(take(1))
      .subscribe((data) => {
        this.availableShifts = data;
      });

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
          id: 'Auto Generated',
          employeeId: '',
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
    var user: User = JSON.parse(localStorage.getItem('User')!);
    this.shiftEditForm = this.fb.group({
      id: [employeeShift.id],
      employeeId: [user.id],
      shiftId: [employeeShift.shiftId, [Validators.required]],
    });
  }
}
