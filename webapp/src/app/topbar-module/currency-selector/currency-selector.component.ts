import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  public  currentUser;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    });

    this.currentUser = this.authenticationService.currentUser;
  }

  ngOnInit() {
  }

  setCurrency(currency) {
    this.currentUser.currency = currency;
    this.userService.modifyUser(this.currentUser).subscribe(res => {
      this.authenticationService.setCurrentUser(res);
    });
  }

}
