import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch'
import { CookieService } from 'ng2-cookies';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManagerService {

  public baseUrl = environment.apiUrl;
  public cookieService: CookieService;

  constructor(protected http: HttpClient) {
    this.cookieService = new CookieService();
  }

  generateHeadersAuth(headers: HttpHeaders) {
    var token = localStorage.getItem('yticons-token') || localStorage.getItem('yticons-token');

    if (token) {
      headers = headers.append('x-access-token', token);
    }
    return headers;
  }
  get(url) {
    var headers = new HttpHeaders();

    headers = this.generateHeadersAuth(headers);

    return this.http.get<any>(this.baseUrl + url, {
      headers: headers
    }).catch((error: Response | any) => {
        return Observable.throw(error);
    });
  }

  getQuery(url, queryParams) {
    var headers = new HttpHeaders();

    headers = this.generateHeadersAuth(headers);

    return this.http.get<any>(this.baseUrl + url, {
      params: queryParams,
      headers: headers
    });
  }

  post(url, body) {
    var headers = new HttpHeaders();

    headers = this.generateHeadersAuth(headers);

    return this.http.post<any>(this.baseUrl + url, body, {
      headers: headers
    }).catch((error: Response | any) => {
        return Observable.throw(error);
    });
  }

  put(url, body) {
    var headers = new HttpHeaders();

    headers = this.generateHeadersAuth(headers);

    return this.http.put(this.baseUrl + url, body, {
      headers: headers
    }).catch((error: Response | any) => {
        return Observable.throw(error);
    });
  }

  delete(url) {
    var headers = new HttpHeaders();

    headers = this.generateHeadersAuth(headers);

    return this.http.delete<any>(this.baseUrl + url, {
      headers: headers
    }).catch((error: Response | any) => {
        return Observable.throw(error);
    });
  }
}
