import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ManagerService} from './manager.service';
import {ToastsManager} from 'ng2-toastr';
import {environment} from '../../environments/environment';

const Web3 = require('web3');
declare let require: any;
declare let window: any;

const tokenAbi = require('./token/tokenContract.json');

@Injectable()
export class CardService extends ManagerService {

  private _account: string = null;
  private _web3;
  private _tokenContract: any;
  private _self;
  private _tokenContractAddress = environment.tokenAddress;

  constructor(http: HttpClient, private toastr: ToastsManager) {
    super(http);
    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);
      const web3 = this._web3;
      const toastr = this.toastr;

      // Probably useless to unsubscribe since a service is never destroyed...
      toastr.onClickToast().subscribe(toast => {
        if (toast.timeoutId) {
          clearTimeout(toast.timeoutId);
        }
        this.toastr.clearToast(toast);
      });

      this._web3.eth.net.getId().then(function (id) {
        if (id !== 3) {
          toastr.warning('You are not connected to the right network on MetaMask.', 'Network');
        }
      });

      this._tokenContract = new this._web3.eth.Contract(tokenAbi, this._tokenContractAddress);
    } else {
      toastr.warning('You need to install MetaMask to be able to trade cards.', 'Marketplace');
    }

  }

  public async getAccount(display: boolean): Promise<string> {
    const toastr = this.toastr;

    if (this._web3)
      this._account = await new Promise((resolve, reject) => {

        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            toastr.error('There was an error while fetching your accounts.', 'Account');
            return;
          }

          if (accs.length === 0) {
            if (display)
              toastr.error('Please make sure your Ethereum wallet is correctly configured.', '');
            this._account = null;
            resolve(null);
          }
          resolve(accs[0]);
        })
    }) as string;
    else
      this._account = null;
    if (this._account)
      this._web3.eth.defaultAccount = this._account;
    return Promise.resolve(this._account);
  }

  public async getCardNumberByAddress(account: string): Promise<number> {

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;

      this._tokenContract.methods.balanceOf(account).call(function (err, result) {
        if (err != null) {
          reject(err);
          resolve(0);
        }

        resolve(result);
      });
    }) as Promise<number>;
  }

  public async lockCard(_idCard: number): Promise<any> {

    let account = await this.getAccount(true);

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      const toastr = this.toastr;

      this._tokenContract.methods.lock(_idCard).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          toastr.success('Your lock has been successfully done.', 'Lock');
          resolve(result);
        } else {
          toastr.error('The YTIcon\'s lock has failed.', 'Transaction');
          resolve(null);
        }
      });
    }) as Promise<any>;
  }

  public async unlockCard(_idCard: number): Promise<any> {

    let account = await this.getAccount(true);

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      const toastr = this.toastr;

      this._tokenContract.methods.unlock(_idCard).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          toastr.success('Your unlock has been successfully done.', 'Transaction');
          resolve(result);
        } else {
          toastr.error('The YTIcon\'s unlock has failed.', 'Transaction');
          resolve(null);
        }
      });
    }) as Promise<any>;
  }

  public async purchaseCard(_idCard: number, _price: number): Promise<any> {

    let account = await this.getAccount(true);

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      const toastr = this.toastr;

      this._tokenContract.methods.purchase(_idCard).send({
        from: account,
        gas: 4000000,
        value: this._web3.utils.toWei(_price.toString(), 'ether')
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          toastr.success('Your purchase is now pending on the Blockchain.', 'Transaction');
          resolve(1);
        } else {
          toastr.error('Your purchase has been rejected.', 'Transaction');
          resolve(0);
        }
      });
    }) as Promise<any>;
  }

  public async changePriceCard(_idCard: number, _price: number, _walletCard: string): Promise<any> {

    let account = await this.getAccount(true);
    const toastr = this.toastr;

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      if (account != _walletCard) {
        toastr.error('You can only change the YTIcon\'s price if you are the card holder', 'Price modification');
        resolve(0);
      }
      else {
        this._tokenContract.methods.setPrice(_idCard, this._web3.utils.toWei(_price.toString(), 'ether')).send({
          from: account,
          gas: 4000000,
          value: 0
        }, function (error, result) { //get callback from function which is your transaction key
          if (!error) {
            toastr.success('The price modification of your YTIcon is now pending on the Blockchain.', 'Price modification');
            resolve(1);
          } else {
            toastr.error('Your YTIcon\'s price modification has failed.', 'Price modification');
            resolve(0);
          }
        });
      }
    }) as Promise<any>;
  }

  public async createCardFromName(name: string) {
    let account = await this.getAccount(true);

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      const toastr = this.toastr;

      this._tokenContract.methods.createCardFromName(name).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          toastr.success('The YTIcon named "' + name + '" has been successfully created.', 'Card creation');
          resolve(1);
        } else {
          toastr.error('An error occured while creating the YTIcon "' + name + '"', 'Card creation');
          resolve(0);
        }
      });
    }) as Promise<any>;
  }

  public async createCardSC(card) {
    let account = await this.getAccount(true);
    const toastr = this.toastr;

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      let self = this;

      this._tokenContract.methods.createCard(card.name, this._web3.utils.toWei(card.price.toString(), 'ether'), card.ownerWallet, card.beneficiaryWallet, card.isLocked).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key

        if (!error) {
          card.tx = result;
          self.createCard(card).subscribe(res => {
            resolve(res);
          }, error => {
            toastr.error('Transaction failed.');
            resolve(null);
          });
        } else {
          toastr.error('An error occured while creating the YTIcon "' + card.name + '"', 'Card creation');
          resolve(null);
        }
      });
    }) as Promise<any>;
  }

  public getCardsByAddress(account: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const _web3 = this._web3;

      this._tokenContract.methods.getOwnerCards(account).call(function (err, result) {

        if (err != null) {
          reject(err);
        }

        resolve(result);
      });
    }) as Promise<any>;

  }

  public hasMetamask() {
    return typeof window.web3 !== 'undefined' ? true : false;
  }

  public setImageCard(card, cardForm) {
    return this.post('/cards/images/' + card._id, cardForm);
  }

  public getCountCards() {
    return this.get('/cards/count');
  }

  public getCardByIdSmartContract(id: number) {
    return this.get('/cards/bySmartId/' + id);
  }

  public createCard(card) {
    return this.post('/cards', card);
  }

  public getCard(id: any) {
    return this.get('/cards/' + id);
  }

  public getCards() {
    return this.get('/cards');
  }

  public modifyCard(card) {
    return this.put('/cards/' + card._id, card);
  };

  public getCardsByWallet(wallet: string) {
    return this.get('/cards/byWallet/' + wallet);
  }

  public getCardsQuery(query) {
    return this.getQuery('/cards', query);
  }

  public getCardsQueryAdmin(query) {
    return this.getQuery('/cards/admin', query);
  }

  public checkWallet(wallet: string) {
    return this._web3.utils.isAddress(wallet);
  }
}
