import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public currentUser: {};

  constructor(private as: AuthenticationService) { }

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    this.currentUser = this.as.currentUser;
    return this.currentUser ? true : false;
  }

}
