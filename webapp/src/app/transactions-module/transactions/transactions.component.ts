import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'transactions-live',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  public  isOpen = true;
  public  txList = {};
  public  txHashList = [];

  constructor(public txService: TransactionService) {

    this.txService.txListChange.subscribe(res => {

      this.txList = res;
      this.txHashList = [];
      for (var key of Object.keys(this.txList)) {
        this.txHashList.push(key);
      }
    });
  }

  ngOnInit() {
    this.txList = this.txService.txList;
    for (var key of Object.keys(this.txList)) {
      this.txHashList.push(key);
    }
  }
}
