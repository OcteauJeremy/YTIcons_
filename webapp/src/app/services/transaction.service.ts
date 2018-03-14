import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { SocketService } from './socket.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TransactionService extends ManagerService{

  public  txList = {};
  public  txListChange: Subject<any> = new Subject<any>();
  private subscriptions: Subscription = new Subscription();

  constructor(http: HttpClient, private socketService: SocketService) {
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

    var socketSub = this.socketService.onEvent(txHash).subscribe(res => {
      if (this.txList[txHash]) {
        if (res) {
          this.txList[txHash].isFinished = true;
          this.txList[txHash].success = true;
        } else {
          this.txList[txHash].isFinished = true;
          this.txList[txHash].success = false;
        }
        socketSub.unsubscribe();
        this.txListChange.next(this.txList);
      }
    });


    this.listenTx(txHash).subscribe(res => {
      this.txListChange.next(this.txList);
    }, err => {
      delete this.txList[txHash];
      this.txListChange.next(this.txList);
    });

  }

  removeTx(txHash) {
    delete this.txList[txHash];

    this.txListChange.next(this.txList);
  }

}
