import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';

@Injectable()
export class NationalityService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getNationalities() {
    return this.get('/nationalities');
  }
}
