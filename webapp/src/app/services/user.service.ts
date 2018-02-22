import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  modifyUser(user) {
    return this.http.put<any>('http://localhost:3000/users/' + user._id, user);
  }

  getUser(user) {
    return this.http.get<any>('http://localhost:3000/users/' + user._id);
  }

}
