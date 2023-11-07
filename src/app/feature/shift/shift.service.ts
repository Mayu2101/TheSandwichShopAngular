import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeShift } from './employee-shift.model';
import { Observable, of } from 'rxjs';
import { Shift } from './shift.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  apiUrl = environment.apiUrl + '/shift/';

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listAvailableShifts(): Observable<Shift[]> {
    const fakeShifts = [
      {
        id: '121',
        date: new Date(),
        shiftType: 'Morning',
        noEmployeesBooked: 0,
      },
      {
        id: '122',
        date: new Date(),
        shiftType: 'Afternoon',
        noEmployeesBooked: 0,
      },
      {
        id: '123',
        date: new Date(),
        shiftType: 'Morning',
        noEmployeesBooked: 0,
      },
      {
        id: '124',
        date: new Date(),
        shiftType: 'Afternoon',
        noEmployeesBooked: 0,
      },
    ];
    return of(fakeShifts);
  }

  employeeShifts(guid: string) {
    const fakeShifts = [
      {
        id: '123',
        employeeId: guid,
        shiftId: '123',
        shiftType: 'Morning',
        shiftDate: new Date(),
      },
    ];
    return of(fakeShifts);
    //TODO: return this.httpClient.post(`${this.apiUrl}userShifts`, guid, this.httpOptions)
  }

  getEmployeeShift(id: string) {
    return of({
      id: id,
      employeeId: '123',
      shiftId: '123',
      shiftType: '',
      shiftDate: new Date(),
    });
  }

  createEmployeeShift(userShift: EmployeeShift) {
    userShift.id = '';
    console.log(userShift);
  }

  updateEmployeeShift(userShift: EmployeeShift) {
    console.log(userShift);
  }
}
