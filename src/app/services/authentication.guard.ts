import { CanActivateFn } from '@angular/router';
import { User } from '../shared/user';

export function authenticatedGuard(): CanActivateFn {
  return () => {
    var user: User = JSON.parse(localStorage.getItem('User')!);
    if (!user || !user.otp) {
      return false;
    }
    return true;
  };
}
