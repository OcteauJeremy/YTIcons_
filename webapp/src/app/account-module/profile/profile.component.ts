import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CardService} from '../../services/card.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cardNumber: number;
  public cardsUser: any;
  public currentUser: any;

  constructor(private as: AuthenticationService, private cs: CardService, private _router: Router) {

    this.currentUser = this.as.currentUser;
    if (this.currentUser == null) {
      this._router.navigate(['login']);
    }
    cs.getCardNumberByAddress(this.currentUser.wallet).then(cardNumber => this.cardNumber = cardNumber);
    cs.getCardsByAddress(this.currentUser.wallet).then(cardsUser => this.cardsUser = cardsUser);
  }

  ngOnInit() {
    this.currentUser = this.as.currentUser;
  }

}
