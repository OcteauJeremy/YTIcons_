import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CardService} from './card.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {

  private address: string;
  public  currentUser: any;
  public  currentUserChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private cs: CardService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserChange.next(this.currentUser);
  }

  public login(_username: string, _password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signin', {username: _username, password: _password});
  }

  public register(_email: string, _username: string, _password: string): Observable<any> {
    this.cs.getAccount().then(account => this.address = account);
    return this.http.post('http://localhost:3000/users', {username: _username, email: _email, password: _password,
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
}
