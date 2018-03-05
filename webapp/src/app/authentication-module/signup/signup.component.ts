import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastsManager} from 'ng2-toastr';
import {environment} from "../../../environments/environment";
import {RecaptchaService} from "../../services/recaptcha.service";

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
  public emailPattern: string;
  private subscribtions: Subscription = new Subscription();
  public fileList: FileList = null;
  private captchaResponse: string = null;
  private isRobot: boolean = true;
  public recaptchaPublic: string = environment.recaptchaPublic;

  public url: string = 'assets/images/authplc.png';

  constructor(private as: AuthenticationService, private _router: Router, private toastr: ToastsManager, private rs: RecaptchaService) {
  }

  ngOnInit() {
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  }

  ngAfterViewChecked() {
    $('re-captcha > div').addClass('recaptcha');
  }

  redirect(pagename: string) {
    this._router.navigate(['/' + pagename]);
  }

  resolved(_captchaResponse: string) {
    this.captchaResponse = _captchaResponse;
  }

  signup() {
    const toastr = this.toastr;

    this.subscribtions.add(this.rs.getRecapatchaResponse(this.captchaResponse).subscribe(res => {
      this.isRobot = false;
    }, error => {
      this.isRobot = true;
      toastr.error('Please, verify that you\'re not a robot.', 'Sign up');
    }));

    if (this.isRobot) {
      return;
    }

    if (!this.isRobot && this.email && this.username && this.password && this.conPassword && this.password == this.conPassword) {

      let formData: FormData = new FormData();
      if (this.fileList && this.fileList.length > 0) {
        let file: File = this.fileList[0];
        formData.append('avatar', file);
      }

      formData.append('email', this.email);
      formData.append('username', this.username);
      formData.append('password', this.password);
      this.as.register(formData).then(res => {
        this._router.navigate(['signin']);
        this.toastr.success('Sign up successful.', 'Sign up');

      }, error => {
        if (error) {
          this.toastr.error(error.error.message, 'Sign up');
        }
      });

    } else {
      this.toastr.error('Please, fill all the fields.', 'Sign up');
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
    this.subscribtions.unsubscribe();
  }

}
