import {Component, Input, OnDestroy, OnInit, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import {Card} from "../../models/Card";
import {CardService} from "../../services/card.service";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastsManager} from "ng2-toastr";
import {Subscription} from 'rxjs/Subscription';
import {RoundPipe} from "../../pipes/round.pipe";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit, OnDestroy {

  @Input("card") card: Card;
  @ViewChild('cardModalCloseButton') cardModalCloseButton: ElementRef;
  @ViewChild('buyModalCloseButton') buyModalCloseButton: ElementRef;

  public currentUser: any;
  public acceptTos = false;
  public newPrice: number = 0;
  public newLineTag = "<br />";
  public currentWallet: string;
  private subscriptions: Subscription = new Subscription();

  constructor(private roundPipe: RoundPipe, public cs: CardService, private as: AuthenticationService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.as.currentUserChange.subscribe((user) => {
      this.currentUser = user;
      this.acceptTos = true;
    });

    this.currentUser = this.as.getLocalUser();
  }

  changePriceCard(idCard: number, _wallet: string) {
    let _self = this;

    if (this.newPrice != 0 ) {
      this.cs.changePriceCard(idCard, this.newPrice, _wallet).then(function (res) {
        _self.newPrice = _self.roundPipe.transform(_self.card.price);
        _self.cardModalCloseButton.nativeElement.click();
      });
    } else {
      _self.newPrice = _self.roundPipe.transform(_self.card.price);
      this.toastr.error('The price must be greater than 0.', 'Price modification');
    }
  }

  purchaseCard(card: Card, price: number) {
    let _self = this;
    if (price < card.price) {
      price = this.roundPipe.transform(card.price);
    }
    this.cardModalCloseButton.nativeElement.click();
    this.buyModalCloseButton.nativeElement.click();
    if (!this.currentUser) {
      this.acceptTos = false;
    }
    this.cs.purchaseCard(card.id, price).then(function(res) {
      _self.newPrice = _self.roundPipe.transform(_self.card.price);
    }, error => {
      _self.newPrice = _self.roundPipe.transform(_self.card.price);
      this.toastr.error('You need to install MetaMask to be able to trade cards.', 'Purchase card');
    });
  }

  ngOnInit() {
    this.currentUser = this.as.currentUser;
    Observable.interval(2000).subscribe(x => {
      this.currentWallet = this.cs._account;
    });

    if (this.currentUser) {
      this.acceptTos = true;
    }

    this.newPrice = this.roundPipe.transform(this.card.price);

    this.subscriptions.add(this.toastr.onClickToast().subscribe( toast => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
      this.toastr.clearToast(toast);
    }));
  }

  ngOnDestroy() {
    this.acceptTos = false;
    this.subscriptions.unsubscribe();
  }

}
