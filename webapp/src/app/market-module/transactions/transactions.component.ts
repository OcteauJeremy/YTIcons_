import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  @Input("transactions") transactions;

  constructor() { }

  ngOnInit() {
  }

}
