import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "./manager.service";

@Injectable()
export class LeaderboardService  extends ManagerService{

  constructor(http: HttpClient) {
    super(http);
  }
  public getLeaderboard() {
    return this.get('/leaderboards/bySubscribers/');
  }

}
