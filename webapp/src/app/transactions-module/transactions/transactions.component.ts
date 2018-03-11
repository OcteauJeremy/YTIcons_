import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'transactions-live',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public  isOpen = false;
  public  txList = {};

  constructor(public txService: TransactionService) {

    this.txService.txListChange.subscribe(res => {
      // console.log('res', res);
      this.txList = res;
      // console.log('txList', this.txList);
    });
  }

  ngOnInit() {
    this.txList = this.txService.txList;
  }

}
