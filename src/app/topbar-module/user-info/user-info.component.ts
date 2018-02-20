import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private as: AuthenticationService, private _router: Router) { }

  logout() {
    this.as.logout();
    this._router.navigate(['login']);
  }

  ngOnInit() {
  }

}
