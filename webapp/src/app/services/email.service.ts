import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  sendMailContact(mailContent) {
    return this.post('/sendFormContact', mailContent);
  }

}
