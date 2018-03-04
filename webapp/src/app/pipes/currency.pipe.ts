import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { RealvalueService } from '../services/realvalue.service';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../services/authentication.service';

@Pipe({
  name: 'currency',
  pure: false
})
export class CurrencyPipe implements PipeTransform, OnDestroy {
  public  currentCurrency;
  private subscriptions: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService, private realvalueService: RealvalueService, private as:AuthenticationService) {
    this.subscriptions.add(this.currencyService.currencyPipeChange.subscribe((currency) => {
      this.currentCurrency = currency;
    }));

    this.currentCurrency = this.currencyService.currentCurrency;
  }

  transform(value: any, args?: any): any {

    switch (this.currentCurrency) {
      case "ETH":
        return this.precisionRoundEth((value)).toString() + " ETH";
      case "USD":
        return this.precisionRound(value * this.realvalueService.valueUSD).toString() + " USD";
      case "EUR":
        return this.precisionRound(value * this.realvalueService.valueEUR).toString() + " EUR";
      default:
        return value;
    }
  }

  precisionRoundEth(num) {
    return num.toFixed(4);
  }

  precisionRound(num) {
    return (Math.round(num * 100) / 100)
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
