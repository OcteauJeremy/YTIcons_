import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CardService} from './card.service';
import { Subject } from 'rxjs/Subject';
import { ManagerService } from './manager.service';

@Injectable()
export class AuthenticationService extends ManagerService{

  private address: string;
  public  currentUser: any;
  public  currentUserChange: Subject<any> = new Subject<any>();


  constructor(http: HttpClient, private cs: CardService) {
    super(http);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserChange.next(this.currentUser);
  }

  public login(_username: string, _password: string): Observable<any> {
    return this.post('/signin', {username: _username, password: _password});
  }

  public async register(_formData: FormData): Promise<any> {
    this.address = await this.cs.getAccount();

    if (this.address && this.address != '')
      _formData.append('wallet', this.address);

    // C'etait pour tester le link des users
    // else
    //   _formData.append('wallet', '0x546cc3C2ef5659F911dA90F90d48648a3f20C511');

    return this.post('/users', _formData).toPromise();
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  public  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    this.currentUserChange.next(this.currentUser);
  }

  public getLocalUser() {
    var localUser = JSON.parse(localStorage.getItem('currentUser'));
    return localUser;
  }
}
