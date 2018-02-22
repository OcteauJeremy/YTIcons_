import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../configs/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RealvalueService {

  public  valueBTC = 0;
  public  valueUSD = 0;
  public  valueEUR = 0;

  constructor(private http: HttpClient) {
    this.http.get<any>('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
      .subscribe(res => {
        this.valueBTC = res.BTC;
        this.valueUSD = res.USD;
        this.valueEUR = res.EUR;
    });
  }
}
