import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransactionService extends ManagerService{

  public  txList = {};
  public  txListChange: Subject<any> = new Subject<any>();

  constructor(http: HttpClient) {
    super(http);
  }

  listenTx(txHash) {
    return this.get('/transactions-module/listen/' + txHash);
  }

  addTx(txHash) {
    this.txList[txHash] = {
      isFinished: false,
      success: false
    };
    this.listenTx(txHash).subscribe(res => {
      if (this.txList[txHash]) {
        this.txList[txHash].isFinished = true;
        this.txList[txHash].success = true;
      }
      this.txListChange.next(this.txList);
    }, err => {
      if (this.txList[txHash]) {
        this.txList[txHash].isFinished = true;
        this.txList[txHash].success = false;
      }
    });
    this.txListChange.next(this.txList);
  }

  removeTx(txHash) {
    delete this.txList[txHash];

    this.txListChange.next(this.txList);
  }

}
