import { Router } from '@angular/router';
import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ng2-cookies';
import { ToastsManager } from 'ng2-toastr';
import fontawesome from '@fortawesome/fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import { TokenService } from '../../services/token.service';
import { RecaptchaService } from '../../services/recaptcha.service';
import { environment } from '../../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy, AfterViewChecked {

  public password: string;
  public username: string;
  public rememberMe = true;
  private subscriptions: Subscription = new Subscription();
  private captchaResponse: string = null;
  public recaptchaPublic: string = environment.recaptchaPublic;
  private isRobot = true;
  private loadingChannel = false;

  constructor(private as: AuthenticationService, private _router: Router,
              public cookieService: CookieService, private toastr: ToastsManager,
              private tokenService: TokenService, private rs: RecaptchaService) {
    fontawesome.library.add(faCheck);
  }

  ngOnInit() {
    if (this.as.currentUser != null) {
      this._router.navigate(['account']);
    }
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

  resolved(_captchaResponse: string) {
    let _self = this;
    this.captchaResponse = _captchaResponse;
    this.subscriptions.add(this.rs.getRecapatchaResponse(this.captchaResponse).subscribe(res => {
      _self.isRobot = false;
    }, error => {
      _self.isRobot = true;
    }));
  }

  signin() {
    const toastr = this.toastr;
    let _self = this;
    if (this.isRobot) {
      toastr.error('Please, verify that you\'re not a robot.', 'Sign up');
    }
    else {
      this.loadingChannel = true;
      _self.subscriptions.add(_self.as.login(_self.username, _self.password).subscribe(res => {

        if (_self.rememberMe) {
          localStorage.setItem('yticons-token', res.token);
        } else {
          _self.cookieService.set('yticons-token', res.token);
        }

        //console.log(res);
        _self.as.setCurrentUser(res);
        _self._router.navigate(['account']);
        this.loadingChannel = false;
      }, error => {
        this.toastr.error('The entered credentials are incorrect.', 'Authentication');
        this.loadingChannel = false;
      }));
    }
  }

  redirect(pagename: string) {
    this._router.navigate(['/' + pagename]);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
