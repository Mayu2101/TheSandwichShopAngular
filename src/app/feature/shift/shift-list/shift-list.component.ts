import { Component, OnInit } from '@angular/core';
import { EmployeeShift } from '../employee-shift.model';
import { ShiftService } from '../shift.service';
import { take } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss'],
})
export class ShiftListComponent implements OnInit {
  dataSource = new MatTableDataSource<EmployeeShift>([]);
  displayedColumns: string[] = ['date', 'type', 'action'];
  isLoading = true;

  constructor(private shiftService: ShiftService) {}

  ngOnInit(): void {
    var user: User = JSON.parse(localStorage.getItem('User')!);
    this.shiftService
      .employeeShifts(user.employeeId)
      .pipe(take(1))
      .subscribe((shifts: EmployeeShift[]) => {
        this.dataSource.data = shifts;
        this.isLoading = false;
      });
  }
}
