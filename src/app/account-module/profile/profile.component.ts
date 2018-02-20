import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cardNumber: number;
  public currentUser: any;
  public account: string;

  constructor(cs: CardService, private _router: Router) {
    if (localStorage.getItem('currentUser') == null) {
      this._router.navigate(['login']);
    }
    this.currentUser =  JSON.parse(localStorage.getItem('currentUser'));
    cs.getAccount().then(account => this.account = account);
    cs.getCardNumberByAddress().then(cardNumber => this.cardNumber = cardNumber);
  }

  ngOnInit() {
  }

}
