import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transactions-live',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
