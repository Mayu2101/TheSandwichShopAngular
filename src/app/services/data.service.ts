import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../shared/login-user';
import { RegisterUser } from '../shared/register-user';
import { User, UserOtp } from '../shared/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = environment.apiUrl + '/Authentication';

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  RegisterUser(registerUser: RegisterUser) {
    return this.httpClient.post(
      `${this.apiUrl}/Register`,
      registerUser,
      this.httpOptions,
    );
  }

  LoginUser(loginUser: LoginUser) {
    return this.httpClient.post<User>(
      `${this.apiUrl}/Login`,
      loginUser,
      this.httpOptions,
    );
  }

  ValidateOtp(user: UserOtp) {
    return this.httpClient.post(`${this.apiUrl}/Otp`, user, this.httpOptions);
  }
}
