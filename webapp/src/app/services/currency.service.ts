import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CurrencyService {

  public  currentCurrency;
  public  currentCurrencyChange: Subject<any> = new Subject<any>();

  constructor(public authenticationService: AuthenticationService) {
    this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentCurrency = user.currency;
      this.currentCurrencyChange.next(this.currentCurrency);
    });

    if (authenticationService.currentUser) {
      console.log('Loading current User', authenticationService.currentUser);
      this.currentCurrency = authenticationService.currentUser.currency;
    } else {
      this.currentCurrency = "ETH";
    }
    this.currentCurrencyChange.next(this.currentCurrency);
  }

  setCurrency(currency) {
    this.currentCurrency = currency;
    this.currentCurrencyChange.next(currency);
  }

}
