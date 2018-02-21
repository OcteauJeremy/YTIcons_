import { Injectable } from '@angular/core';

import * as Web3 from 'web3';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

declare let require: any;
declare let window: any;

const tokenAbi = require('./tokenContract.json');

@Injectable()
export class CardService {

  private _account: string = null;
  private _web3;
  private _tokenContract: any;
  private _tokenContractAddress = '0x7C7F9aC11985e87CC2E1347C3da7F8F3d21B443a';

  constructor(private http: HttpClient) {
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
    if (this._account == null) {
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
    }

    return Promise.resolve(this._account);
  }

  public async getCardNumberByAddress(account: string): Promise<number> {

    return new Promise((resolve, reject) => {
      const _web3 = this._web3;

      this._tokenContract.methods.balanceOf(account).call(function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(result);
      });
    }) as Promise<number>;
  }

  public getCardsByAddress(account: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const _web3 = this._web3;

      this._tokenContract.methods.getOwnerCards(account).call(function (err, result) {

        console.log(result);

        if(err != null) {
          reject(err);
        }

        resolve(result);
      });
    }) as Promise<any>;

  }

  public getCards() {
    return this.http.get('http://localhost:3000/cards');
  }

}
