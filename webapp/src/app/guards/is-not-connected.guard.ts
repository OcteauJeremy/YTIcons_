import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../services/authentication.service';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class IsNotConnectedGuard implements CanActivate {

  constructor(private as: AuthenticationService, private router: Router, private cookieService: CookieService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let customRedirect = next.data['redirectTo'];

    const localToken = localStorage.getItem('yticons-token');
    const cookieToken = this.cookieService.get('yticons-token');

    const token = localToken || cookieToken;
    if (token) {
      return this.as.getUserByToken(token).map((res) => {
          const redirect = !!customRedirect ? customRedirect : '/';
          this.router.navigate([redirect]);
          return false;
      }).first();
    } else {
      return true;
    }
  }
}
