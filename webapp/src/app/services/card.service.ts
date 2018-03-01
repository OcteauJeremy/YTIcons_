import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ManagerService} from './manager.service';
import {ToastsManager} from 'ng2-toastr';

var Web3 = require('web3');
declare let require: any;
declare let window: any;

const tokenAbi = require('./token/tokenContract.json');

@Injectable()
export class CardService extends ManagerService {

  private _account: string = null;
  private _web3;
  private _tokenContract: any;
  private _self;
  private _tokenContractAddress = '0x6ee43a4ab5c077c19b32bf2fcd83e235d40fce8f';

  constructor(http: HttpClient, private toastr: ToastsManager) {
    super(http);
    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);
      const web3 = this._web3;
      const toastr = this.toastr;

      this._web3.eth.net.getId().then(function (id) {
        if (id !== 3) {
          toastr.warning('You are not connected to the right network on MetaMask.', 'Network');
        }
      });

      this._tokenContract = new this._web3.eth.Contract(tokenAbi, this._tokenContractAddress);
    } else {
      toastr.warning('You need to install MetaMask to be able to trade cards.', 'Cards trading');
    }

  }

  public async getAccount(): Promise<string> {
    const toastr = this.toastr;

    this._account = await new Promise((resolve, reject) => {
      this._web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          toastr.error('There was an error while fetching your accounts.', 'Account');
          return;
        }

        if (accs.length === 0) {
          toastr.error('The account(s)\' retrieval had failed. Please make sure your Ethereum client is correctly configured.', '');
          this._account = null;
          resolve(null);
        }
        resolve(accs[0]);
      })
    }) as string;

    if (this._account)
      this._web3.eth.defaultAccount = this._account;
    return Promise.resolve(this._account);
  }

  // public async refreshWallet() {
  //   let _self = this;
  //   this.getAccount().then(function(res: string) {
  //     console.log(res);
  //     _self.http.post('http://localhost:3000/users/' + _self.as.currentUser.wallet, {wallet: res});
  //   });
  // }

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

  public async purchaseCard(_idCard: number, _price: number): Promise<any> {

    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      const toastr = this.toastr;

      this._tokenContract.methods.purchase(_idCard).send({
        from: account,
        gas: 4000000,
        value: this._web3.utils.toWei(_price.toString(), 'ether')
      }, function (error, result) { //get callback from function which is your transaction key
        console.log('result', result);
        if (!error) {
          toastr.success('Your purchase has been successfully done.', 'Transaction');
          resolve(1);
        } else {
          toastr.error('Transaction closed', 'Transaction');
          console.log(error);
          resolve(0);
        }
      });
    }) as Promise<any>;
  }

  public async changePriceCard(_idCard: number, _price: number): Promise<any> {

    let account = await this.getAccount();
    const toastr = this.toastr;

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;

      this._tokenContract.methods.setPrice(_idCard, this._web3.utils.toWei(_price.toString(), 'ether')).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          toastr.success('The price of your YTIcon has been successfully modified.', 'Price modification');
          resolve(1);
        } else {
          toastr.error('Transaction closed', 'Price modification');
          console.log(error);
          resolve(0);
        }
      });
    }) as Promise<any>;
  }

  public async createCardFromName(name: string) {
    let account = await this.getAccount();

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
          console.log(error);
          resolve(0);
        }
      });
    }) as Promise<any>;
  }

  public async createCardSC(card) {
    let account = await this.getAccount();
    const toastr = this.toastr;

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      let self = this;

      this._tokenContract.methods.createCard(card.name, card.price, null, null, false).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key

        if (!error) {
          self.getCountCards().subscribe(res => {
            card.id = res.count;
            card.tx = result;
            self.createCard(card).subscribe(res => {
              resolve(card);
            });
          });
        } else {
          toastr.success('An error occured while creating the YTIcon "' + card.name + '"', 'Card creation');
          console.log(error);
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

  public setImageCard(card, cardForm) {
    return this.post('/cards/images/' + card.id, cardForm);
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

  public getCardsByWallet(wallet: string) {
    return this.get('/cards/byWallet/' + wallet);
  }

  public getCardsQuery(query) {
    return this.getQuery('/cards', query);
  }

}
