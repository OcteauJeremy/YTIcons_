import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  public login(_username: string, _password): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signin', {username: _username, password: _password});
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

}
