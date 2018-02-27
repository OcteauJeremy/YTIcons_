import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CardService} from '../../services/card.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Card} from "../../models/Card";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../../services/user.service";
import {ManagerService} from "../../services/manager.service";
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cardNumber: number;
  public cardsUser: Array<Card> = [];
  public currentUser: any;
  private subscribtions: Subscription = new Subscription();
  public address: string = null;
  public userProfile: any;

  constructor(private ms: ManagerService,private route: ActivatedRoute, private socket: Socket,
              private as: AuthenticationService, private cs: CardService, private _router: Router,private us: UserService) {
    socket.on('tx-card',  (cardId) => {
      for (let c of this.cardsUser) {
        if (c._id == cardId) {
          this.cardsUser = [];
          this.cs.getCardsByAddress(this.address).then((cardsUser: Array<number>) => {
            for (var n of cardsUser) {
              this.subscribtions.add(this.cs.getCardByIdSmartContract(n).subscribe(res => {
                if (res) {
                  this.cardsUser.push(res as Card);
                }
              }));
            }
          });
          break ;
        }
      }
    });
  }

  refreshProfileInfo(wallet: string) {
    let _self = this;

    this.currentUser = this.as.currentUser;

    this.cs.getCardNumberByAddress(wallet).then(cardNumber => this.cardNumber = cardNumber);

    this.cardsUser = [];
    this.cs.getCardsByAddress(wallet).then(function(cardsUser: Array<number>) {
      for (var n of cardsUser) {
        _self.subscribtions.add(_self.cs.getCardByIdSmartContract(n).subscribe(res => {
          if (res) {
            _self.cardsUser.push(res as Card);
          }
        }));
      }
    });
  }

  refreshWallet() {
    let _self = this;
    this.cs.getAccount().then(function(res:string) {
      if (_self.as.currentUser.wallet != res) {
        _self.as.currentUser.wallet = res;
        _self.subscribtions.add(_self.us.modifyUser(_self.as.currentUser).subscribe(res => {
          _self.as.setCurrentUser(res);
          _self.refreshProfileInfo(_self.as.currentUser.wallet);
        }));
      }
    });
  }

  refreshAvatar(event:any) {
    let fileList = event.target.files;
    let _self = this;

    if (fileList && fileList.length > 0) {

      let formData: FormData = new FormData();
      let file: File = fileList[0];
      formData.append('avatar',file);
      formData.append('username', _self.as.currentUser.username);
      formData.append('email', _self.as.currentUser.email);
      formData.append('wallet', _self.as.currentUser.wallet);
      formData.append('currency', _self.as.currentUser.currency);
      formData.append('password', _self.as.currentUser.password);

      _self.subscribtions.add(_self.us.modifyUserFormData(formData, _self.as.currentUser).subscribe(res => {
        _self.as.setCurrentUser(res);
        _self.refreshProfileInfo(_self.as.currentUser.wallet);
      }));
    }

  }

  ngOnInit() {
    let _self = this;
    this.currentUser = this.as.currentUser;

    this.subscribtions.add(this.route.params.subscribe(params => {
      this.address = params['address'];

      if (this.address == null && this.as.currentUser == null) {
        this._router.navigate(['login']);
      }

      if (this.address == null) {
        this.refreshProfileInfo(this.as.currentUser.wallet);
      }

      else {
        this.subscribtions.add(this.us.getUserByWallet(this.address).subscribe(res => {
          _self.userProfile = res;
          _self.refreshProfileInfo(_self.address);
        }));
      }
    }));
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
    this.socket.disconnect();
  }

}
