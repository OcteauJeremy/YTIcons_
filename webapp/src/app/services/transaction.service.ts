import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransactionService extends ManagerService{

  public  txList = [];
  public  txListChange: Subject<any> = new Subject<any>();

  constructor(http: HttpClient) {
    super(http);
  }

  listenTx(txHash) {
    return this.get('/transactions-module/listen/' + txHash);
  }

  addTx(txHash) {
    this.txList.push(txHash);
    this.txListChange.next(this.txList);
  }

  removeTx(txHash) {
    const idx = this.txList.indexOf(txHash);
    if (idx > -1) {
      this.txList.splice(idx, 1);
    }
    this.txListChange.next(this.txList);
  }

}
