import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeShift } from './employee-shift.model';
import { Observable, of } from 'rxjs';
import { Shift } from './shift.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  apiUrl = environment.apiUrl + '/Shift';

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listAvailableShifts(): Observable<Shift[]> {
    return this.httpClient.get<Shift[]>(`${this.apiUrl}/GetShifts`, this.httpOptions)
  }

  employeeShifts(guid: string) {
    let params = new HttpParams().set('employeeId', guid);
    return this.httpClient.get<EmployeeShift[]>(`${this.apiUrl}/GetEmployeeShifts`, {params: params, ...this.httpOptions})
  }

  getEmployeeShift(id: string) {
    let params = new HttpParams().set('empShiftId', id);
    return this.httpClient.get<EmployeeShift>(`${this.apiUrl}/GetEmployeeShift`, {params: params, ...this.httpOptions})
  }

  createEmployeeShift(userShift: EmployeeShift) {
    userShift.employeeShiftId = '';
    return this.httpClient.post<EmployeeShift>(`${this.apiUrl}/BookShift`, userShift, this.httpOptions)
  }

  updateEmployeeShift(userShift: EmployeeShift) {
    return this.httpClient.post<EmployeeShift>(`${this.apiUrl}/UpdateEmployeeShift`, userShift, this.httpOptions)
  }
}
