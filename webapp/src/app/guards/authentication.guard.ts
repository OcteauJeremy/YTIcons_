import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';
import {CookieService} from 'ng2-cookies';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private as: AuthenticationService, private router: Router, private cookieService: CookieService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const customRedirect = next.data['redirectTo'];

    const localToken = localStorage.getItem('yticons-token');
    const cookieToken = this.cookieService.get('yticons-token');

    const token = localToken || cookieToken;
    if (token) {
      return this.as.getUserByToken(token).map((res) => {
          return true;
      }, error => {
        const redirect = !!customRedirect ? customRedirect : '/';
        this.router.navigate([redirect]);
        return false;
      }).first();
    } else {
      const redirect = !!customRedirect ? customRedirect : '/';
      this.router.navigate([redirect]);
      return false;
    }
  }
}
