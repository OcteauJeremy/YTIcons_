import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';

@Injectable()
export class UserService extends ManagerService {

  constructor(http: HttpClient) {
    super(http);
  }

  modifyUser(user) {
    return this.put('/users/' + user._id, user);
  }

  modifyUserFormData(formData: FormData, user) {
    return this.put('/users/' + user._id, formData);
  }

  getUser(user) {
    return this.get('/users/' + user._id);
  }

  getUserByWallet(wallet: string) {
    return this.get('/users/byWallet/' + wallet);
  }

}
