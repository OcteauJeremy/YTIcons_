import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  @Input("transactions") transactions;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToUser(tx) {
    this.router.navigate(['/account', tx.to.wallet])
  }

}
