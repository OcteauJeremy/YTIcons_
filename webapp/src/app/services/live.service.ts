import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "./manager.service";

@Injectable()
export class LiveService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  getLastTransactions() {
    return this.get('/transactions/last');
  }

}
