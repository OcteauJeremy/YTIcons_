import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  public currency = "ETH";
  public currentUser;

  constructor(private currencyService: CurrencyService, private as: AuthenticationService) {
    this.as.currentUserChange.subscribe((user) => {
      this.currency = user.currency;
    });

    this.currencyService.currentUserCurrencyChange.subscribe((currency) => {
      this.currency = currency;
    });

    this.currency = this.currencyService.getCurrency();
    console.log('this.currency CMP', this.currency);
  }

  ngOnInit() {
  }

  setCurrency(currency) {
    this.currencyService.setCurrency(currency);
  }
}
