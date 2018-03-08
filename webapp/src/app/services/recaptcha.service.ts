import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "./manager.service";

@Injectable()
export class RecaptchaService extends ManagerService{


  constructor(http: HttpClient) {
    super(http);
  }

  getRecapatchaResponse(_response: string) {
    return this.post('/verifyCaptcha', {'response': _response});
  }

}
