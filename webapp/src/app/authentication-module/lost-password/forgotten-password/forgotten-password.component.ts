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

  public isLoading: boolean = false;
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
    this.subscriptions.add(this.toastr.onClickToast().subscribe( toast => {
        if (toast.timeoutId) {
          clearTimeout(toast.timeoutId);
        }
        this.toastr.clearToast(toast);
    }));
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
      this.isLoading = true;
      this.subscriptions.add(this.authService.lostPassword(this.username).subscribe(res => {
        this.toastr.success('An email has been sent to the email address linked to your account', 'Lost password');
        setTimeout((router: Router) => {
          this._router.navigate(['market']);
          this.isLoading = false;
        }, 3000);
      }, error => {
        this.toastr.error('We could not find you account anywhere.', 'Lost password');
        this.isLoading = false;
      }));
    }
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
