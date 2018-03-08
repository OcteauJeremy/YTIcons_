import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { RecaptchaService } from "../../services/recaptcha.service";
import { ToastsManager } from "ng2-toastr";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-faq',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  private captchaResponse: string = null;
  public recaptchaPublic: string = environment.recaptchaPublic;
  public isRobot = true;
  public form: any = {
    subject: 'Subject',
    name: '',
    email: '',
    text: ''
  }
  private loadingChannel = false;

  constructor(private rs: RecaptchaService,private toastr: ToastsManager) { }

  ngOnInit() {
    this.subscriptions.add(this.toastr.onClickToast().subscribe( toast => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
      this.toastr.clearToast(toast);
    }));
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

  send() {
    const toastr = this.toastr;
    let _self = this;

    if (this.isRobot) {
      toastr.error('Please, verify that you\'re not a robot.', 'Sign up');
    }
    else {
      this.loadingChannel = true;
      if (_self.form.name && _self.form.subject && _self.form.subject != 'Subject' && _self.form.email && _self.form.text) {
        _self.toastr.success('Your message has been successfully sent', 'Contact us');
        this.loadingChannel = false;
      } else {
        this.loadingChannel = false;
        _self.toastr.error('Please, fill all the fields.', 'Contact us');
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
