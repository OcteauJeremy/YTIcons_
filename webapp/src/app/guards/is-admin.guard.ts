import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class IsAdminGuard implements CanActivate {

  constructor(private as: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let currentUser = this.as.currentUser;

    if (currentUser && currentUser.roles.indexOf('admin') > -1) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
