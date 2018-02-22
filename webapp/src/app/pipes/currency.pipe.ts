import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RealvalueService } from '../services/realvalue.service';

@Pipe({
  name: 'currency',
  pure: false
})
export class CurrencyPipe implements PipeTransform {
  public  currentUser;

  constructor(private authenticationService: AuthenticationService, private realvalueService: RealvalueService) {
    this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    });

    this.currentUser = this.authenticationService.currentUser;
  }

  transform(value: any, args?: any): any {
    let currentUser = this.authenticationService.currentUser;

    switch (currentUser.currency) {
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
