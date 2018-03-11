import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "./manager.service";
import { CookieService } from 'ng2-cookies';

@Injectable()
export class LiveService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getLastTransactions() {
    return this.get('/transactions-module/last');
  }

}
