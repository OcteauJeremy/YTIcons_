import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CardService} from '../../services/card.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Card} from "../../models/Card";
import {Subscription} from "rxjs/Subscription";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cardNumber: number;
  public cardsUser: Array<Card> = [];
  public currentUser: any;
  private subscribtions: Subscription = new Subscription();

  constructor(private as: AuthenticationService, private cs: CardService, private _router: Router) {
    let _self = this;

    this.currentUser = this.as.currentUser;
    if (this.currentUser == null) {
      this._router.navigate(['login']);
    }

    cs.getCardNumberByAddress(this.currentUser.wallet).then(cardNumber => this.cardNumber = cardNumber);

    cs.getCardsByAddress(this.currentUser.wallet).then(function(cardsUser: Array<number>) {
      for (var n of cardsUser) {
        _self.subscribtions.add(_self.cs.getCardByIdSmartContract(n).subscribe(res => {
          if (res) {
            _self.cardsUser.push(res as Card);
          }
        }));
      }
    });

  }

  ngOnInit() {
    this.currentUser = this.as.currentUser;
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }

}
