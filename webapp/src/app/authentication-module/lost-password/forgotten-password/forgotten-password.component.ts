import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { environment } from '../../../../environments/environment';
import { RecaptchaService } from '../../../services/recaptcha.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit, OnDestroy {

  public email: string;
  public emailPattern: string;
  private captchaResponse: string = null;
  private isRobot: boolean = true;
  public recaptchaPublic: string = environment.recaptchaPublic;
  public subscriptions: Subscription = new Subscription();

  constructor(private _router: Router, private toastr: ToastsManager, private rs: RecaptchaService) {
  }

  resolved(_captchaResponse: string) {
    this.captchaResponse = _captchaResponse;
  }

  ngOnInit() {
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  }

  send() {
    this.subscriptions.add(this.rs.getRecapatchaResponse(this.captchaResponse).subscribe(res => {
      this.isRobot = false;
    }, error => {
      this.isRobot = true;
      this.toastr.error('Please, verify that you\'re not a robot.', 'Authentication');
    }));

    if (!this.isRobot && this.email) {

    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
