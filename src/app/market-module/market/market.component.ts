import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  public cards = [];

  constructor() {
    this.cards.push(new Card(0));
    this.cards.push(new Card(1));
    this.cards.push(new Card(2));
    this.cards.push(new Card(3));
    this.cards.push(new Card(4));
  }

  ngOnInit() {
  }

}
