import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { RealvalueService } from '../../services/realvalue.service';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("card") card: Card;
  @Input("modal") modal: Boolean = true;

  constructor(private realvalueService: RealvalueService, private cs: CardService) { }

  purchaseCard(idCard: number, price: number) {
    this.cs.purchaseCard(idCard, price).then(function(res) {
      console.log(res);
    });

  }
  ngOnInit() {
  }
}
