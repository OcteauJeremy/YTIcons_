import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Card } from '../../models/Card';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../services/user.service';
import {ManagerService } from '../../services/manager.service';
import { SocketService } from '../../services/socket.service';
import fontawesome from '@fortawesome/fontawesome';
import { faSync } from '@fortawesome/fontawesome-free-solid';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cardNumber = 0;
  public cardsUser: Array<Card> = [];
  public currentUser: any;
  private subscriptions: Subscription = new Subscription();
  public address: string = null;
  public userProfile: any;
  public isLoading = true;
  public isSyncronising = false;
  public loadingChannel = false;

  public form = {
    password: '',
    newPassword: '',
    conPassword: ''
  };

  conPassword: string;
  password: string;

   constructor(private ms: ManagerService, private route: ActivatedRoute, private socketService: SocketService,
               private as: AuthenticationService, private cs: CardService, private _router: Router, private us: UserService,
               private toastr: ToastsManager) {

     fontawesome.library.add(faSync);

     const _self = this;

     this.socketService.initSocket();

     this.subscriptions.add(this.socketService.onEvent('tx-card').subscribe((cardId: any) => {
       for (const c of this.cardsUser) {
         if (c._id == cardId) {
           this.cardsUser = [];
           this.cs.getCardsByWallet(this.address == null ? this.currentUser.wallet : this.address).subscribe(cardsUser => {

             for (const card of cardsUser) {
               if (card) {
                 _self.cardsUser.push(card as Card);
                 document.getElementsByClassName('modal-backdrop')[0].remove();
               }
             }
             _self.cardNumber = _self.cardsUser.length;
           });
           break ;
         }
       }
     }));
  }

  refreshProfileInfo(wallet: string) {
    const _self = this;

    this.currentUser = this.as.currentUser;

    this.cardsUser = [];
    this.isLoading = true;

    if (wallet) {
      this.subscriptions.add(this.cs.getCardsByWallet(wallet).subscribe(cardsUser => {

        for (const card of cardsUser) {
          if (card) {
            _self.cardsUser.push(card as Card);
          }
        }
        _self.cardNumber = _self.cardsUser.length;
        _self.isLoading = false;
      }));
    } else {
      this.isLoading = false;
    }
  }

  refreshWallet() {
    const _self = this;
    const toastr = this.toastr;

    this.isSyncronising = true;
    this.cs.getAccount(true).then(function(res: string) {
      if (_self.as.currentUser.wallet != res) {
        const save = _self.as.currentUser.wallet;
        _self.as.currentUser.wallet = res;
        _self.subscriptions.add(_self.us.updateWallet(_self.as.currentUser).subscribe(res => {
          if (res != null) {
            _self.as.setCurrentUser(res);
            _self.refreshProfileInfo(_self.as.currentUser.wallet);
            _self.isSyncronising = false;
            toastr.success('Your wallet has been syncronised.', 'Wallet refresh');
          }
        }, error => {
          _self.as.currentUser.wallet = save;
          _self.isSyncronising = false;
          toastr.error('This wallet is already set on another user.', 'Wallet refresh');
        }));
      } else {
        toastr.info('Your wallet is already syncronised with MetaMask.', 'Wallet refresh');
        _self.isSyncronising = false;
      }
    });
  }

  refreshAvatar(event: any) {
    const fileList = event.target.files;
    const _self = this;

    if (fileList && fileList.length > 0) {

      const formData: FormData = new FormData();
      const file: File = fileList[0];
      formData.append('avatar', file);
      formData.append('username', _self.as.currentUser.username);
      formData.append('email', _self.as.currentUser.email);
      formData.append('wallet', _self.as.currentUser.wallet);
      formData.append('currency', _self.as.currentUser.currency);
      formData.append('password', _self.as.currentUser.password);

      this.loadingChannel = true;
      _self.subscriptions.add(_self.us.modifyUserFormData(formData, _self.as.currentUser).subscribe(res => {
        _self.as.setCurrentUser(res);
        _self.refreshProfileInfo(_self.as.currentUser.wallet);
        this.loadingChannel = false;
      }, error => {
        this.toastr.error(error.message, 'Edit avatar');
        this.loadingChannel = false;
      }));
    }

  }

  editPassword() {

    const toastr = this.toastr;
    const _self = this;

    if (this.form.conPassword !== this.form.newPassword) {
      toastr.error('Your passwords must match', 'Edit password');
    } else if (this.form.password != '' && this.form.conPassword != ''  && this.form.newPassword != '' ) {
      this.subscriptions.add(this.as.setNewPassword(this.form.password, this.form.conPassword).subscribe(res => {
          toastr.success(res.message, 'Edit password');
          _self.form.password = '';
          _self.form.conPassword = '';
          _self.form.newPassword = '';

        },
        error => {
          toastr.error(error.error.message, 'Edit password');
        }
      ));
    } else {
      toastr.error('All fields are required', 'Edit password');
    }
  }

  ngOnInit() {
    const _self = this;
    this.currentUser = this.as.currentUser;

    this.subscriptions.add(this.toastr.onClickToast().subscribe( toast => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
      this.toastr.clearToast(toast);
    }));

    this.subscriptions.add(this.route.params.subscribe(params => {
      this.address = params['address'];

      /*if (this.address == null && this.as.currentUser == null) {
        this._router.navigate(['login']);
      }*/

      if (this.address == null) {
        this.refreshProfileInfo(this.as.currentUser.wallet);
      } else {
        this.subscriptions.add(this.us.getUserByWallet(this.address).subscribe(res => {
          if (res == null) {
            this._router.navigate(['market']);
          } else {
            _self.userProfile = res;
            _self.refreshProfileInfo(_self.address);
          }
        }, error => {
          this._router.navigate(['market']);
        }));
      }
    }));
  }

  ngOnDestroy() {
    this.socketService.removeListener('tx-card');
    this.subscriptions.unsubscribe();
  }

}
