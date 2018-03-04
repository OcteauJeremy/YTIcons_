import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CurrencyService implements OnDestroy {

  public  currentCurrency;
  public  currentCurrencyChange: Subject<any> = new Subject<any>();
  public  currencyPipeChange:  Subject<any> = new Subject<any>();

  private subscriptions: Subscription = new Subscription();

  constructor(public authenticationService: AuthenticationService, private userService: UserService) {
    this.subscriptions.add(this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentCurrency = user.currency;
      this.currentCurrencyChange.next(user.currency);
      this.currencyPipeChange.next(this.currentCurrency);
    }));

    this.currentCurrency = "ETH";
    this.currentCurrencyChange.next(this.currentCurrencyChange);
  }

  setCurrency(currency) {
    this.currentCurrency = currency;

    this.currencyPipeChange.next(this.currentCurrency);
    if (this.authenticationService.currentUser) {
      this.authenticationService.currentUser.currency = currency;
      this.subscriptions.add(this.userService.modifyUser(this.authenticationService.currentUser).subscribe(() => {}));
    }
  }

  getCurrency() {
    return this.currentCurrency;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
