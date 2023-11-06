import { Component, OnInit } from '@angular/core';
import { UserShift } from '../user-shift.model';
import { ShiftService } from '../shift.service';
import { take } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {
  
  dataSource = new MatTableDataSource<UserShift>([]);
  displayedColumns: string[] = ['date', 'type', 'action'];
  isLoading = true;

  constructor(
    private shiftService: ShiftService,
  ) {}

  ngOnInit(): void {
    this.shiftService.userShifts('123')
      .pipe(take(1))
      .subscribe((shifts: UserShift[]) => {
        this.dataSource.data = shifts;
        this.isLoading = false;
      });
  }
}
