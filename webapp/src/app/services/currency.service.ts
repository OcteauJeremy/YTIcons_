import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Injectable()
export class CurrencyService {

  public  currentCurrency;
  public  currentCurrencyChange: Subject<any> = new Subject<any>();
  public  currentUserCurrencyChange: Subject<any> = new Subject<any>();

  constructor(public authenticationService: AuthenticationService, private userService: UserService) {
    this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentCurrency = user.currency;
      this.currentUserCurrencyChange.next(user.currency);
    });

    this.currentCurrency = "ETH";
    this.currentUserCurrencyChange.next(this.currentCurrencyChange);
    console.log(this.currentCurrency);
  }

  setCurrency(currency) {
    this.currentCurrency = currency;

    if (this.authenticationService.currentUser) {
      this.authenticationService.currentUser.currency = currency;
      this.userService.modifyUser(this.authenticationService.currentUser).subscribe(() => {})
    }
  }

  getCurrency() {
    return this.currentCurrency;
  }

}
