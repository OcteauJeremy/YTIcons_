import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { Card } from '../../models/Card';
import {CardService} from "../../services/card.service";
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('openModal') openModal:ElementRef;
  @Input("card") card: Card;
  @Input("modal") modal: Boolean = true;
  public currentUser = {
    _id: ""
  };
  public newPrice: number = 0;

  constructor(private authenticationService: AuthenticationService, public cs: CardService,
              private router: Router, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
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

  changePriceCard(idCard: number) {
    if (this.newPrice != 0 ) {
      this.cs.changePriceCard(idCard, this.newPrice).then(function (res) {
        console.log(res);
      });
    } else {
      this.toastr.error('The price must be greater than 0.', 'Price modification');
    }
  }

  openModalOnLoad() {
    this.openModal.nativeElement.click();
  }

  ngOnInit() {
    console.log('enter');
  }

  redirectToUser() {
    console.log('redirect', '/account', this.card.owner.wallet);
    this.router.navigate(['/account', this.card.owner.wallet]);
  }

}
