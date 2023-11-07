export interface User {
  id: string;
  userName: string;
  hasBookedShift: boolean;
  otp?: string;
}
