import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit, OnDestroy {

  public currency = "ETH";
  public currentUser;
  private subscriptions: Subscription = new Subscription();

  constructor(private authenticationService: AuthenticationService, private currencyService: CurrencyService, private userService: UserService) {

    this.subscriptions.add(
      this.authenticationService.currentUserChange.subscribe((user) => {
        this.currentUser = user;
        this.currency = user.currency;
      })
    );

    this.subscriptions.add(
      this.currencyService.currentCurrencyChange.subscribe((currency) => {
        this.currency = currency;
        this.currentUser = this.authenticationService.getLocalUser();
        if (this.currentUser) {
          this.subscriptions.add(
            this.userService.modifyUser(this.currentUser).subscribe(res => {
              this.authenticationService.setCurrentUser(res);
            })
          );
        }
      })
    );

    this.currentUser = this.authenticationService.currentUser;
    if (this.currentUser) {
      this.currency = this.currentUser.currency;
    } else {
      this.currency = currencyService.currentCurrency;
    }
  }

  ngOnInit() {
  }

  setCurrency(currency) {
    this.currencyService.setCurrency(currency);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
