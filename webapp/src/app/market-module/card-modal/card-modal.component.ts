import {Component, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Card} from "../../models/Card";
import {CardService} from "../../services/card.service";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastsManager} from "ng2-toastr";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit, OnDestroy {

  @Input("card") card: Card;

  public currentUser: any;
  public acceptTos = false;
  public newPrice: number = 0;
  public newLineTag = "<br />";
  private subscriptions: Subscription = new Subscription();

  constructor(public cs: CardService, private as: AuthenticationService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.as.currentUserChange.subscribe((user) => {
      this.currentUser = user;
      this.acceptTos = true;
    });

    this.currentUser = this.as.getLocalUser();
  }

  changePriceCard(idCard: number, _wallet: string) {
    if (this.newPrice != 0 ) {
      this.cs.changePriceCard(idCard, this.newPrice, _wallet).then(function (res) {
        // console.log(res);
      });
    } else {
      this.toastr.error('The price must be greater than 0.', 'Price modification');
    }
  }

  purchaseCard(card: Card, price: number) {
    if (price < card.price) {
      price = card.price;
    }
    this.cs.purchaseCard(card.id, price).then(function(res) {
      // console.log(res);
    });
  }

  ngOnInit() {
    this.currentUser = this.as.currentUser;
    if (this.currentUser) {
      this.acceptTos = true;
    }

    this.newPrice = parseFloat(this.card.price.toFixed(4));

    this.subscriptions.add(this.toastr.onClickToast().subscribe( toast => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
      this.toastr.clearToast(toast);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
