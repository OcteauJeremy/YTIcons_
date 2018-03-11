import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionService extends ManagerService{

  constructor(http: HttpClient) {
    super(http);
  }

  listenTx(txHash) {
    return this.get('/transactions-module/listen/' + txHash);
  }

}
