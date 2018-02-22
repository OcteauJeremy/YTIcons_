import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CardService} from '../../services/card.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Card} from "../../models/Card";
import {Subscription} from "rxjs/Subscription";
import {HttpClient} from "@angular/common/http";

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

  constructor(private as: AuthenticationService, private cs: CardService, private _router: Router,private http: HttpClient) {
    }

  refreshProfileInfo() {
    let _self = this;

    this.currentUser = this.as.currentUser;

    this.cs.getCardNumberByAddress(this.currentUser.wallet).then(cardNumber => this.cardNumber = cardNumber);

    this.cardsUser = [];
    this.cs.getCardsByAddress(this.currentUser.wallet).then(function(cardsUser: Array<number>) {
      for (var n of cardsUser) {
        _self.subscribtions.add(_self.cs.getCardByIdSmartContract(n).subscribe(res => {
          if (res) {
            _self.cardsUser.push(res as Card);
          }
        }));
      }
    });
  }

  refreshWallet() {
    let _self = this;
    this.cs.getAccount().then(function(res:string) {
      if (_self.as.currentUser.wallet != res) {
        _self.subscribtions.add(_self.http.put('http://localhost:3000/users/' + _self.as.currentUser._id, {wallet: res}).subscribe(res => {
          _self.as.setCurrentUser(res);
          _self.refreshProfileInfo();
        }));
      }
    });
  }

  ngOnInit() {
    if (this.as.currentUser == null) {
      this._router.navigate(['login']);
    }

    this.refreshProfileInfo();
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }

}
