import {Injectable} from '@angular/core';

var Web3 = require('web3');

import {HttpClient} from '@angular/common/http';
import {ManagerService} from './manager.service';

declare let require: any;
declare let window: any;

const tokenAbi = require('./token/tokenContract.json');

@Injectable()
export class CardService extends ManagerService {

  private _account: string = null;
  private _web3;
  private _tokenContract: any;
  private _self;
  private _tokenContractAddress = '0xfc251e1c1df6b78784ca6436b4611a556c471c67';

  constructor(http: HttpClient) {
    super(http);
    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);
      const web3 = this._web3;

      this._web3.eth.net.getId().then(function (id) {
        if (id !== 3) {
          alert('You are not connected to the right network on Metamask !');
        }
      });

      this._tokenContract = new this._web3.eth.Contract(tokenAbi, this._tokenContractAddress);
    } else {
      alert('You need to install Metamask to be able to trade cards !');
    }

  }

  public async getAccount(): Promise<string> {
    this._account = await new Promise((resolve, reject) => {
      this._web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          alert('There was an error fetching your accounts.');
          return;
        }

        if (accs.length === 0) {
          alert(
            'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
          );
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

      this._tokenContract.methods.purchase(_idCard).send({
        from: account,
        gas: 4000000,
        value: this._web3.utils.toWei(_price.toString(), 'ether')
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          alert('Transaction ok');
          resolve(1);
        } else {
          alert('Transaction closed');
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

      this._tokenContract.methods.createCardFromName(name).send({
        from: account,
        gas: 4000000,
        value: 0
      }, function (error, result) { //get callback from function which is your transaction key
        if (!error) {
          alert('Creation de carte ok');
          resolve(1);
        } else {
          alert('Creation de carte annulee');
          console.log(error);
          resolve(0);
        }
      });
    }) as Promise<any>;
  }

  public async createCardSC(card) {
    let account = await this.getAccount();

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
            self.createCard(card).subscribe(res => {
              resolve(card);
            });
          });
        } else {
          alert('Creation de carte annulee');
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

  public getCardsQuery(query) {
    return this.getQuery('/cards', query);
  }

}
