import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class NationalityService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getNationalities() {
    return this.get('/nationalities');
  }

  createNationality(body) {
    return this.post('/nationalities', body);
  }
}
