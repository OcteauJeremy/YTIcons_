import {Component, OnInit} from '@angular/core';
import {LiveService} from "../../services/live.service";
import {Subscription} from "rxjs/Subscription";
import {SocketService} from "../../services/socket.service";
import {Card} from "../../models/Card";

@Component({
  selector: 'app-legal',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css'],
})
export class LiveComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  public transactions: Array<any> = [];

  constructor(private ls: LiveService, private socketService: SocketService) {
  }

  ngOnInit() {
    let _self = this;

    this.socketService.initSocket();

    this.transactions = [];
    this.socketService.onEvent('live-info').subscribe((transaction: any) => {
      if (transaction)
        _self.transactions.unshift(transaction);
    });

    this.subscriptions.add(this.ls.getLastTransactions().subscribe(transactions => {
      if (transactions != null) {
        for (var tr of transactions) {
          _self.transactions.push(tr);
        }
      }
    }, error => {
      console.log(error);
    }));
  }

  ngOnDestroy() {
    this.socketService.removeListener('live-info');
    this.subscriptions.unsubscribe();
  }


}
