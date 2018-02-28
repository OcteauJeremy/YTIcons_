import { Component, OnInit } from '@angular/core';
import {ManagerService} from "../../services/manager.service";
import {LeaderboardService} from "../../services/leaderboard.service";
import {Subscription} from "rxjs/Subscription";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private ls: LeaderboardService) { }

  public leaderboard: any;
  private subscriptions: Subscription = new Subscription();

  ngOnInit() {
    let _self = this;

    this.subscriptions.add(this.ls.getLeaderboard().subscribe(res => {
      if (res != null) {
        _self.leaderboard = res;
      }
    }, error => {
      alert('Wallet is already set on another user !');
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
