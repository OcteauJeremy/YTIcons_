import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YoutubeService extends ManagerService{

  constructor(http: HttpClient) {
    super(http);
  }

  getChannel(body){
    return this.post('/channel', body);
  }

}
