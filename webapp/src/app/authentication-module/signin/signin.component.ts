import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../../services/authentication.service';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  public  password: string;
  public  username: string;
  public  rememberMe = true;
  private subscribtions: Subscription = new Subscription();

  constructor(private as: AuthenticationService, private _router: Router, public cookieService: CookieService) {
    if (as.currentUser != null) {
      this._router.navigate(['account']);
    }
  }

  signin() {
    this.subscribtions.add(this.as.login(this.username, this.password).subscribe(res => {

      if (this.rememberMe) {
        localStorage.setItem('yticons-token', res.token);
      } else {
        this.cookieService.set('yticons-token', res.token);
      }

      this.as.setCurrentUser(res);
      this._router.navigate(['account']);

    },error2 => {
      alert(error2.error.message);
    }));
  }

  redirect(pagename: string) {
    this._router.navigate(['/' + pagename]);
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }
}
