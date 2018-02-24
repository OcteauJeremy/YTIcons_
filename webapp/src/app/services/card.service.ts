import {Injectable} from '@angular/core';

import * as Web3 from 'web3';

import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';

declare let require: any;
declare let window: any;

const tokenAbi = require('./token/tokenContract.json');

@Injectable()
export class CardService extends ManagerService {

  private _account: string = null;
  private _web3;
  private _tokenContract: any;
  private _tokenContractAddress = '0x305C0325C8652eb114251080c56020924055C8e2';

  constructor(http: HttpClient) {
    super(http);
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
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
          return;
        }
        resolve(accs[0]);
      })
    }) as string;

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
//          reject(err);
          resolve(0);
        }

        resolve(result);
      });
    }) as Promise<number>;
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

  public getCardByIdSmartContract(id: number) {
    return this.get('/cards/bySmartId/' + id);
  }

  public getCards() {
    return this.get('/cards');
  }

  public getCardsQuery(query) {
    return this.getQuery('/cards', query);
  }

}
