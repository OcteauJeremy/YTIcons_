import { Component, OnInit } from '@angular/core';
import { ManagerService } from "../../services/manager.service";
import { LeaderboardService } from "../../services/leaderboard.service";
import { Subscription } from "rxjs/Subscription";
import { AuthenticationService } from "../../services/authentication.service";
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private ms: ManagerService,private ls: LeaderboardService, private as: AuthenticationService, private toasterService: ToasterService) {

  }

  public leaderboard: any;
  private subscriptions: Subscription = new Subscription();
  public currentUser: any;

  ngOnInit() {
    let _self = this;
    this.currentUser = this.as.currentUser;

    //console.log(this.currentUser);
    this.subscriptions.add(this.ls.getLeaderboard().subscribe(res => {
      if (res != null) {
        _self.leaderboard = res;
      }
    }, error => {
      this.toasterService.pop('error', 'Leaderboard', 'This wallet is already set on another user.');
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
