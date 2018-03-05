import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TokenService {

  public  currentUser = null;
  public  tokenChange: Subject<any> = new Subject<any>();

  constructor(private cookieService: CookieService) { }


  logout() {
    localStorage.removeItem('yticons-token');
    this.cookieService.delete('yticons-token');
    this.currentUser = null;
    this.tokenChange.next(this.currentUser);
  }

}
