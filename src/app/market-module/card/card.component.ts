import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("card") card: Card;

  constructor() { }

  ngOnInit() {
    console.log(this.card);
  }

}
