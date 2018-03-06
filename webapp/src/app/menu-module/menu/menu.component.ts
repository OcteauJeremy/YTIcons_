import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  public currentUser = null;
  public subscriptions: Subscription = new Subscription();

  constructor(private as: AuthenticationService, public router: Router) {
    this.subscriptions.add(this.as.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    }));
    this.currentUser = this.as.currentUser;
  }

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    this.currentUser = this.as.currentUser;
    return this.currentUser ? true : false;
  }

  isAdmin() {
    return !!(this.currentUser && this.currentUser.roles.indexOf('admin') > -1);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
