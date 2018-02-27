import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public currentUser = null;

  constructor(private as: AuthenticationService) {
    this.as.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    });
    this.currentUser = this.as.currentUser;
  }

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    return this.currentUser ? true : false;
  }
}
