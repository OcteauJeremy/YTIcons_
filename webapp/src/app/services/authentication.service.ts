import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CardService} from './card.service';
import { Subject } from 'rxjs/Subject';
import { ManagerService } from './manager.service';

@Injectable()
export class AuthenticationService extends ManagerService{

  private address: string;
  public  currentUser: any;
  public  currentUserChange: Subject<any> = new Subject<any>();

  constructor(http: HttpClient, private cs: CardService) {
    super(http);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserChange.next(this.currentUser);
  }

  public login(_username: string, _password: string): Observable<any> {
    return this.post('/signin', {username: _username, password: _password});
  }

  public register(_email: string, _username: string, _password: string): Observable<any> {
    this.cs.getAccount().then(account => this.address = account);
    return this.post('/users', {username: _username, email: _email, password: _password,
    wallet: this.address});
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  public  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    this.currentUserChange.next(this.currentUser);
  }

  public getLocalUser() {
    var localUser = JSON.parse(localStorage.getItem('currentUser'));
    return localUser;
  }
}
