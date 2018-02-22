import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from "../../services/authentication.service";
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit, OnDestroy {

  public  cards = [];
  public  types = [];
  private subscribtions: Subscription = new Subscription();


  constructor(private cardService: CardService, private typeService: TypeService) {
    this.subscribtions.add(this.cardService.getCards().subscribe(res => {
      this.cards = res as Array<Card>;

      for (var card of this.cards) {
        //TODO: request smartcontract
        card.price = 0.001;
      }
    }));

    this.subscribtions.add(this.typeService.getTypes().subscribe(res => {
      this.types = res;
    }));
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }
}
