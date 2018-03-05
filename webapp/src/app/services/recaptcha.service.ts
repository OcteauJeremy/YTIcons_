import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "./manager.service";
import { environment } from '../../environments/environment';

@Injectable()
export class RecaptchaService extends ManagerService{

  private secret = environment.recaptchaPrivate;

  constructor(http: HttpClient) {
    super(http);
  }

  getRecapatchaResponse(_response: string) {
    return this.post('/verifyCaptcha', {'secret': this.secret, 'response': _response});
  }

}
