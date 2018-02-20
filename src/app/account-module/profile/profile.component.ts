import { Component, OnInit } from '@angular/core';

import {CardService} from "app/services/card.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cardNumber: number;

  constructor(cs: CardService) {
    cs.getCardNumberByAddress().then(cardNumber => this.cardNumber = cardNumber);
  }

  ngOnInit() {
  }

}
