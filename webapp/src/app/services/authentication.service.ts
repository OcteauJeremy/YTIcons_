import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CardService} from './card.service';
import { Subject } from 'rxjs/Subject';
import { ManagerService } from './manager.service';
import { CookieService } from 'ng2-cookies';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationService extends ManagerService {

  private address: string;
  public  currentUserChange: Subject<any> = new Subject<any>();
  public  currentUser;


  constructor(http: HttpClient, private cs: CardService, public cookieService: CookieService,
              private tokenService: TokenService) {
    super(http);

    var localToken = localStorage.getItem('yticons-token');
    var cookieToken = this.cookieService.get('yticons-token');

    var token = localToken || cookieToken;
    if (token) {
      this.getUserByToken(token).subscribe((res) => {
        this.currentUser = res;
        this.tokenService.currentUser = this.currentUser;
        this.currentUserChange.next(this.currentUser);
        console.log('CurrentUser changed', this.currentUser);
      });
    } else {
      this.currentUser = null;
      this.tokenService.currentUser = this.currentUser;
      this.currentUserChange.next(this.currentUser);
    }

    this.tokenService.tokenChange.subscribe((res) => {
      this.currentUser = null;
    });
  }

  ngOnInit() {

  }

  public login(_username: string, _password: string): Observable<any> {
    return this.post('/signin', {username: _username, password: _password});
  }

  public async register(_formData: FormData): Promise<any> {
    this.address = await this.cs.getAccount();

    if (this.address && this.address != '')
      _formData.append('wallet', this.address);

    return this.post('/users', _formData).toPromise();
  }

  public logout() {
    localStorage.removeItem('yticons-token');
    this.cookieService.delete('yticons-token');
    this.tokenService.currentUser = null;
    this.currentUser = null;
  }

  public getUserByToken(token) {
    return this.get('/token/' + token);
  }

  public  setCurrentUser(user) {
    this.currentUser = user;
    this.tokenService.currentUser = this.currentUser;
    this.currentUserChange.next(this.currentUser);
  }

  public getLocalUser() {
    return this.currentUser;
  }
}
