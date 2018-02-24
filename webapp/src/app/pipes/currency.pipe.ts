import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RealvalueService } from '../services/realvalue.service';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'currency',
  pure: false
})
export class CurrencyPipe implements PipeTransform {
  public  currentCurrency;

  constructor(private currencyService: CurrencyService, private realvalueService: RealvalueService) {
    this.currencyService.currentCurrencyChange.subscribe((currency) => {
      this.currentCurrency = currency;
    });

    this.currentCurrency = this.currencyService.currentCurrency;
  }

  transform(value: any, args?: any): any {

    switch (this.currentCurrency) {
      case "ETH":
        return (value).toString() + " ETH";
      case "USD":
        return this.precisionRound(value * this.realvalueService.valueUSD).toString() + " USD";
      case "EUR":
        return this.precisionRound(value * this.realvalueService.valueEUR).toString() + " EUR";
      default:
        return value;
    }
  }

  precisionRound(num) {
    return (Math.round(num * 100) / 100)
  }

}
