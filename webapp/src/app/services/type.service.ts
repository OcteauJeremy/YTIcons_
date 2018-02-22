import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';

@Injectable()
export class TypeService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getTypes() {
    return this.get('/types');
  }
}
