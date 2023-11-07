export interface User {
  userName: string;
  userId: string;
  employeeId: string;
  hasBookedShift: boolean;
  otp?: string;
}


export interface UserOtp {
  userName: string;
  otp: string;
}
