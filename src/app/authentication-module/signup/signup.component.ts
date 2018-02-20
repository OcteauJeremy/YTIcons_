import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  public email: string;
  public username: string;
  public password: string;
  public conPassword: string;
  private subscribtions: Subscription = new Subscription();

  constructor(private cs: AuthenticationService, private _router: Router) { }

  redirect(pagename: string) {
    this._router.navigate(['/' + pagename]);
    }

    signup() {
      if (this.email && this.username && this.password && this.conPassword && this.password == this.conPassword) {
        this.subscribtions.add(this.cs.register(this.email, this.username, this.password).subscribe(res => {
            this._router.navigate(['login']);
        }, error2 => {
          alert(error2.error.message);
        }));

      } else {
        alert('Check your form');
      }
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }

}
