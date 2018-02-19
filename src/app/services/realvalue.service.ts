import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../configs/environment';


@Injectable()
export class RealvalueService {

  private socket: any;

  constructor() {
    this.socket = io(environment.cryptoCompare.url, {});

    this.socket.on('2~BitTrex~BTC~USD', (result) => {
      console.log(result);
    });
    this.socket.on('', (result) => {
      console.log(result);
    });

    this.socket.emit('SubAdd', environment.cryptoCompare.opts);

  }

}
