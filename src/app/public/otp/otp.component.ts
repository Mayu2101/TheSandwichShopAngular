import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { User, UserOtp } from 'src/app/shared/user';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  otpFormGroup: FormGroup = this.fb.group({
    Otp: ['', Validators.required],
  });

  ngOnInit(): void {}

  SubmitOtp() {
    if (localStorage.getItem('User')) {
      // this.mockOtpForNow();
      var user: User = JSON.parse(localStorage.getItem('User')!);
      user.otp = this.otpFormGroup.value['Otp'];

      var otpUser: UserOtp = {
        userName: user.userName,
        otp: this.otpFormGroup.value['Otp']
      }
      this.dataService.ValidateOtp(otpUser).subscribe(
        () => {
          if (user.hasBookedShift) {
            user.otp = this.otpFormGroup.value['Otp'];
            localStorage.setItem('User', JSON.stringify(user));
            this.otpFormGroup.reset();
            this.router.navigate(['../shift/list']);
          } else {
            this.snackBar.open(
              'You do not currently have a shift booked',
              'X',
              {
                duration: 5000,
              },
            );
            localStorage.removeItem('User');
            this.otpFormGroup.reset();
            this.router.navigate(['login']);
          }
        },
        (response: HttpErrorResponse) => {
          if (response.status === 400) {
            this.snackBar.open(response.error, 'X', { duration: 5000 });
          }
        },
      );
    }
  }

  mockOtpForNow() {
    var user: User = JSON.parse(localStorage.getItem('User')!);
    if (user.hasBookedShift) {
      user.otp = this.otpFormGroup.value['Otp'];
      localStorage.setItem('User', JSON.stringify(user));
      this.otpFormGroup.reset();
      this.router.navigate(['../shift/list']);
    } else {
      this.snackBar.open('You do not currently have a shift booked', 'X', {
        duration: 5000,
      });
      localStorage.removeItem('User');
      this.otpFormGroup.reset();
      this.router.navigate(['login']);
    }
  }
}
