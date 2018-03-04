import {Component, OnDestroy, OnInit} from '@angular/core';
import { ManagerService } from "../../services/manager.service";
import { LeaderboardService } from "../../services/leaderboard.service";
import { Subscription } from "rxjs/Subscription";
import { AuthenticationService } from "../../services/authentication.service";
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {

  constructor(private ms: ManagerService,private ls: LeaderboardService, private as: AuthenticationService, private toastr: ToastsManager) {

  }

  public leaderboard: any;
  private subscriptions: Subscription = new Subscription();
  public currentUser: any;

  ngOnInit() {
    let _self = this;
    this.currentUser = this.as.currentUser;
    const toastr = this.toastr;

    this.subscriptions.add(this.ls.getLeaderboard().subscribe(res => {
      if (res != null) {
        _self.leaderboard = res.leaderboard;
      }
    }, error => {
      toastr.error( 'This wallet is already set on another user.', 'Leaderboard');
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
