import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public currentUser = null;

  constructor(private as: AuthenticationService, private router: Router) {
    this.as.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    });
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
}
