import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs/Subscription';
import fontawesome from '@fortawesome/fontawesome';
import faEthereum from '@fortawesome/fontawesome-free-brands';
import { faDollarSign, faEuroSign } from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit, OnDestroy {

  public currency = "ETH";
  public currentUser;
  private subscriptions: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService, private as: AuthenticationService) {
    fontawesome.library.add(faEthereum);
    fontawesome.library.add(faDollarSign);
    fontawesome.library.add(faEuroSign);

    this.subscriptions.add(this.as.currentUserChange.subscribe((user) => {
      if (user) {
        this.currency = user.currency;
      }
    }));

    this.subscriptions.add(this.currencyService.currentCurrencyChange.subscribe((currency) => {
      this.currency = currency;
    }));

    this.currency = this.currencyService.getCurrency();
  }

  ngOnInit() {
  }

  setCurrency(currency) {
    this.currency = currency;
    this.currencyService.setCurrency(currency);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
