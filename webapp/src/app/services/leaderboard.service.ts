import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "./manager.service";
import { CookieService } from 'ng2-cookies';

@Injectable()
export class LeaderboardService  extends ManagerService{

  constructor(http: HttpClient) {
    super(http);
  }
  public getLeaderboard(wallet) {
    if (wallet) {
      return this.get('/leaderboards/bySubscribers/' + wallet);
    }
    return this.get('/leaderboards/bySubscribers');
  }

}
