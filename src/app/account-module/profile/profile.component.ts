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

  constructor(cs: CardService, private _router: Router) {
    if (localStorage.getItem('currentUser') == null) {
      this._router.navigate(['login']);
    }
    cs.getCardNumberByAddress().then(cardNumber => this.cardNumber = cardNumber);
  }

  ngOnInit() {
  }

}
