import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';
import {AuthenticationService} from "../../../services/authentication.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  public token: string;
  private subscriptions: Subscription = new Subscription();

  public form = {
    'newPassword': '',
    'conPassword': ''
  }
  constructor(private _router: Router, private toastr: ToastsManager, private as: AuthenticationService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      this.token = params['token'];
    }));
  }

  setPassword() {
    const toastr = this.toastr;

    if (this.form.conPassword !== this.form.newPassword) {
      toastr.error('New password must match', 'New password');
    }
    else if (!this.form.conPassword || !this.form.newPassword) {
      toastr.error('Please fill all the fields', 'New password');
    }
    else {
      this.subscriptions.add(this.as.resetPassword(this.form.newPassword, this.token).subscribe(res => {
        toastr.success(res.message, 'New password');
        this._router.navigate(['login']);
      }, error => {
        toastr.error(error.error.message, 'New password');
        this._router.navigate(['login']);
      }));
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
