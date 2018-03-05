import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastsManager} from 'ng2-toastr';

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
  public fileList: FileList = null;

  public url: string = 'assets/images/authplc.png';

  constructor(private as: AuthenticationService, private _router: Router, private toastr: ToastsManager) { }

  redirect(pagename: string) {
    this._router.navigate(['/' + pagename]);
    }

    signup() {
      if (this.email && this.username && this.password && this.conPassword && this.password == this.conPassword) {
        const toastr = this.toastr;

        let formData: FormData = new FormData();
        if (this.fileList && this.fileList.length > 0) {
          let file: File = this.fileList[0];
          formData.append('avatar',file);
        }

        formData.append('email', this.email);
        formData.append('username', this.username);
        formData.append('password', this.password);
        this.as.register(formData).then(res => {
            this._router.navigate(['signin']);
          this.toastr.success('Sign up successful.', 'Sign up');

        }, error => {
          this.toastr.error(error.error.message, 'Sign up');
        });

      } else {
        this.toastr.error('Please, fill all the fields.', 'Sign up');
      }
    }

  readUrl(event:any) {
    this.fileList = event.target.files;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }

}
