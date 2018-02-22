import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManagerService {

  private baseUrl = "http://localhost:3000";

  constructor(protected http: HttpClient) { }

  get(url) {
    return this.http.get<any>(this.baseUrl + url);
  }

  post(url, body) {
    return this.http.post<any>(this.baseUrl + url, body);
  }

  put(url, body) {
    return this.http.put(this.baseUrl + url, body);
  }

  delete(url) {
    return this.http.delete<any>(this.baseUrl + url);
  }
}
