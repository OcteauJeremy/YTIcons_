import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private as: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let customRedirect = next.data['redirectTo'];

    if (this.as.currentUser) {
      return true;
    }


    let redirect = !!customRedirect ? customRedirect : '/market';
    this.router.navigate([redirect]);

    return false;
  }
}
