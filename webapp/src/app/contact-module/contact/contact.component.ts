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
  private isRobot: boolean = true;
  public recaptchaPublic: string = environment.recaptchaPublic;

  public form: any = {
    subject: 'Subject',
    name: '',
    email: '',
    text: ''
  }
  constructor(private rs: RecaptchaService,private toastr: ToastsManager) { }

  ngOnInit() {
  }

  resolved(_captchaResponse: string) {
    this.captchaResponse = _captchaResponse;
  }

  send() {
    const toastr = this.toastr;

    this.subscriptions.add(this.rs.getRecapatchaResponse(this.captchaResponse).subscribe(res => {
      this.isRobot = false;
    }, error => {
      this.isRobot = true;
      toastr.error('Please, verify that you\'re not a robot.', 'Contact us');
    }));

    if (!this.isRobot && this.form.name && this.form.subject && this.form.subject != 'Subject' && this.form.email && this.form.text) {

    } else if (!this.isRobot) {
      this.toastr.error('Please, fill all the fields.', 'Contact us');
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
