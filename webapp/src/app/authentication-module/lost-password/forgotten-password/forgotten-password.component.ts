import { AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { environment } from '../../../../environments/environment';
import { RecaptchaService } from '../../../services/recaptcha.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../../services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit, OnDestroy, AfterViewChecked {

  public username: string;
  private captchaResponse: string = null;
  private isRobot: boolean = true;
  public recaptchaPublic: string = environment.recaptchaPublic;
  public subscriptions: Subscription = new Subscription();

  constructor(private _router: Router, private toastr: ToastsManager, private rs: RecaptchaService, private authService: AuthenticationService) {
  }

  resolved(_captchaResponse: string) {
    this.captchaResponse = _captchaResponse;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    $('re-captcha > div').addClass('recaptcha');
  }

  send() {
    if (!this.username) {
      this.toastr.error('Please fill in your username.', 'Authentication');
      return;
    }
    this.subscriptions.add(this.rs.getRecapatchaResponse(this.captchaResponse).subscribe(res => {
      this.isRobot = false;
    }, error => {
      this.isRobot = true;
      this.toastr.error('Please, verify that you\'re not a robot.', 'Lost password');
    }));

    if (!this.isRobot && this.username) {
      this.subscriptions.add(this.authService.lostPassword(this.username).subscribe(res => {
        this._router.navigate(['market']);

      }, error => {
        this.toastr.error('We could not find you account anywhere.', 'Authentication');
      }));
    }
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
