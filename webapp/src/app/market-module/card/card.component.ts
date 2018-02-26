import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import {CardService} from "../../services/card.service";
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("card") card: Card;
  @Input("modal") modal: Boolean = true;
  public currentUser = {
    _id: ""
  };

  constructor(private authenticationService: AuthenticationService, private cs: CardService,
              private router: Router) {
    this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    });

    this.currentUser = this.authenticationService.getLocalUser();
  }

  purchaseCard(idCard: number, price: number) {
    this.cs.purchaseCard(idCard, price).then(function(res) {
      console.log(res);
    });
  }

  ngOnInit() {
  }

  redirectToUser() {
    console.log('redirect', '/account', this.card.owner.wallet);
    this.router.navigate(['/account', this.card.owner.wallet])
  }

}
