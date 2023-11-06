
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserShift } from './user-shift.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  apiUrl = 'https://localhost:44381/shift/'

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {   
  }

  userShifts(guid: string){
      const fakeShifts = [{ guid: '123', date: new Date(), shiftType: 'Morning' }, { guid: '123', date: new Date(), shiftType: 'Afternoon' }, { guid: '123', date: new Date(), shiftType: 'Night' }]
      return of(fakeShifts)
    //TODO: return this.httpClient.post(`${this.apiUrl}userShifts`, guid, this.httpOptions)
  }

}