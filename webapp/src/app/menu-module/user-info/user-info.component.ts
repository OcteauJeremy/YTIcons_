import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public  currentUser: {};
  public  baseUrl;

  constructor(private as: AuthenticationService, private _router: Router) {
    this.baseUrl = as.baseUrl;
  }

  logout() {
    var urlAccount = '/account/' + this.as.currentUser.wallet;

    this.as.logout();
    if (this._router.url == "/account") {
      this._router.navigateByUrl(urlAccount);
    }
  }

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    this.currentUser = this.as.currentUser;
    return this.currentUser ? true : false;
  }
}
