import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class TypeService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getTypes() {
    return this.get('/types');
  }
}
