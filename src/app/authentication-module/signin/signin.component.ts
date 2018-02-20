import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  public  password: string;
  public  username: string;
  private subscribtions: Subscription = new Subscription();

  constructor(private cs: AuthenticationService, private _router: Router) {
    if (localStorage.getItem('currentUser') != null) {
      this._router.navigate(['account']);
    }
  }

  signin() {
    this.subscribtions.add(this.cs.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('currentUser', JSON.stringify(res));
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
