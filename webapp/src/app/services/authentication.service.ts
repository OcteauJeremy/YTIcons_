import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CardService} from './card.service';
import { Subject } from 'rxjs/Subject';
import { ManagerService } from './manager.service';
import { CookieService } from 'ng2-cookies';
import { TokenService } from './token.service';
import {Subscription} from 'rxjs/Subscription';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService extends ManagerService {

  private address: string;
  public  currentUserChange: Subject<any> = new Subject<any>();
  public  currentUser;
  public  tokenIsChecked = false;

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
        this.tokenIsChecked = true;
      }, error => {
        localStorage.removeItem('yticons-token');
        this.tokenIsChecked = true;
      });
    } else {
      this.currentUser = null;
      this.tokenService.currentUser = this.currentUser;
      this.currentUserChange.next(this.currentUser);
      this.tokenIsChecked = true;
    }

    this.tokenService.tokenChange.subscribe((res) => {
      this.currentUser = null;
    });
  }

  ngOnInit() {

  }

  public login(_username: string, _password: string, _recaptchaRes: string): Observable<any> {
    return this.post('/signin', {username: _username, password: _password, recaptchaRes: _recaptchaRes});
  }

  public async register(_formData: FormData): Promise<any> {
    return this.post('/users', _formData).toPromise();
  }

  public logout() {
    localStorage.removeItem('yticons-token');
    this.cookieService.delete('yticons-token');
    this.tokenService.currentUser = null;
    this.currentUser = null;
    this.currentUserChange.next(null);
  }

  public setNewPassword(password: string, newPassword: string) {
    // console.log(this.currentUser._id);
    return this.post('/newPassword/' + this.currentUser._id, {'oldPassword' : password, 'newPassword' : newPassword});
  }

  public lostPassword(_username: string, _recaptchaRes: string): Observable<any> {
    return this.post('/forgotPassword', {username: _username, recaptchaRes: _recaptchaRes});
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

  public getTokenState() {
    return this.tokenIsChecked;
  }
  public resetPassword(newPassword: string, token: string) {
    return this.post('/resetPassword/' + token, {'password': newPassword});
  }
}
