import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, private router: Router, private tokenService: TokenService,
              private toaster: ToastsManager) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).catch((error) => {
      var token = localStorage.getItem('yticons-token') || localStorage.getItem('yticons-token');

      if (error.status === 401 && token) {
        this.toaster.warning('Your token has expired.', 'Token expired');
        localStorage.removeItem('yticons-token');
        this.cookieService.delete('yticons-token');
        this.tokenService.logout();
        this.router.navigate(['/signin']);
      }
      return Observable.throw(error);
    });
  }
}

