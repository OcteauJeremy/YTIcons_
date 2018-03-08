import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastsManager} from 'ng2-toastr';
import {environment} from '../../../environments/environment';
import {RecaptchaService} from '../../services/recaptcha.service';
import {AnalyticsService} from '../../services/analytics.service';
import {send} from 'q';
import fontawesome from '@fortawesome/fontawesome';
import {faCheck} from '@fortawesome/fontawesome-free-solid';
import {CardService} from '../../services/card.service';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy, AfterViewChecked {

  public email: string;
  public username: string;
  public password: string;
  public conPassword: string;
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public acceptTos = false;
  private subscriptions: Subscription = new Subscription();
  public fileList: FileList = null;
  private captchaResponse: string = null;
  public recaptchaPublic: string = environment.recaptchaPublic;
  public wallet;
  public isRobot = true;
  public loadingChannel = false;

  public url: string = 'assets/images/authplc.png';

  constructor(private as: AuthenticationService, private _router: Router, private toastr: ToastsManager, private rs: RecaptchaService,
              private analytics: AnalyticsService, private cs: CardService) {
    fontawesome.library.add(faCheck);
  }

  ngOnInit() {
    let _self = this;

    this.cs.getAccount(true).then(res => {
      _self.wallet = res;
    });

    this.subscriptions.add(this.toastr.onClickToast().subscribe(toast => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
      this.toastr.clearToast(toast);
    }));
  }

  ngAfterViewChecked() {
    $('re-captcha > div').addClass('recaptcha');
  }

  redirect(pagename: string) {
    this._router.navigate(['/' + pagename]);
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

  signup() {
    const toastr = this.toastr;
    let _self = this;

    if (this.isRobot) {
      toastr.error('Please, verify that you\'re not a robot.', 'Sign up');
    }
    else {
      if (_self.wallet && !_self.cs.checkWallet(_self.wallet)) {
        _self.toastr.error('Please, enter a valid Ethereum address', 'Sign up');
      }
      else if (_self.email && _self.username && _self.password && _self.conPassword && _self.password == _self.conPassword) {

        let formData: FormData = new FormData();
        if (_self.fileList && _self.fileList.length > 0) {
          let file: File = _self.fileList[0];
          formData.append('avatar', file);
        }

        formData.append('email', _self.email);
        formData.append('username', _self.username);
        formData.append('password', _self.password);
        if (_self.wallet) {
          formData.append('wallet', _self.wallet);
        }
        this.loadingChannel = true;
        _self.as.register(formData).then(res => {
          _self._router.navigate(['signin']);
          _self.toastr.success('Sign up successful.', 'Sign up');
          _self.analytics.sendEvent("Authenticate", "Signup success");
          this.loadingChannel = false;
        }, error => {
          _self.toastr.error(error.error.message, 'Sign up');
          this.loadingChannel = false;
        });
      } else {
        _self.toastr.error('Please, fill all the fields.', 'Sign up');
      }
    }
  }

  readUrl(event: any) {
    this.fileList = event.target.files;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
