import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { RealvalueService } from '../../services/realvalue.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("card") card: Card;

  constructor(private realvalueService: RealvalueService) { }

  ngOnInit() {
    console.log('card', this.card);
  }
}
