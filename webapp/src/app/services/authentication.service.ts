import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CardService} from './card.service';

@Injectable()
export class AuthenticationService {

  private address: string;
  public currentUser: any;

  constructor(private http: HttpClient, private cs: CardService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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

}
