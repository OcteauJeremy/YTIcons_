import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';
import {Observable} from "rxjs/Observable";
import { environment } from '../../environments/environment';



const SERVER_URL = environment.apiUrl;

@Injectable()
export class SocketService {

  private socket;


  constructor() { }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }



  public onEvent(event: string): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, (data: any) => observer.next(data));
    });
  }

  public removeListener(event: string) {
    console.log('removed listener : '+ event);
    this.socket.removeAllListeners(event);
  }
}
