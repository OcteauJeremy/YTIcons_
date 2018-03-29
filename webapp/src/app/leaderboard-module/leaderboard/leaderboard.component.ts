import {Component, OnDestroy, OnInit} from '@angular/core';
import { ManagerService } from "../../services/manager.service";
import { LeaderboardService } from "../../services/leaderboard.service";
import { Subscription } from "rxjs/Subscription";
import { AuthenticationService } from "../../services/authentication.service";
import { ToastsManager } from 'ng2-toastr';
import {CardService} from "../../services/card.service";
import {RoundPipe} from "../../pipes/round.pipe";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {

  constructor(private roundPipe: RoundPipe, private ms: ManagerService,private ls: LeaderboardService, private as: AuthenticationService, private toastr: ToastsManager,private cs: CardService) {

  }

  public leaderboard: any;
  public  ranking;
  private subscriptions: Subscription = new Subscription();
  public currentUser: any;
  public isLoading: boolean = true;
  public utilityFund: number;

  ngOnInit() {
    let _self = this;
    this.currentUser = this.as.currentUser;
    const toastr = this.toastr;
    let utilityTmp: number = 0;

    this.cs.getUtilityFund().then(res => {
      utilityTmp = parseInt(res);
      return utilityTmp;

    }).then( res => {
      _self.cs.getSmartContractFund().then(res => {
        utilityTmp += parseInt(res) / 5;
        _self.utilityFund = this.roundPipe.transform(this.cs.getFromWei(utilityTmp.toString()));
        return utilityTmp;
      });
      return utilityTmp;
    });

    // _self.cs.getSmartContractFund().then(res => {
    //   _self.utilityFund += parseInt(res);
    //   _self.utilityFund = this.roundPipe.transform(this.cs.getFromWei(_self.utilityFund.toString()));
    // });



    this.subscriptions.add(toastr.onClickToast().subscribe( toast => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
      this.toastr.clearToast(toast);
    }));

    this.subscriptions.add(this.ls.getLeaderboard(this.as.currentUser ? this.as.currentUser.wallet : null).subscribe(res => {
      if (res != null) {
        _self.leaderboard = res.leaderboard;
        _self.ranking = res.ranking;
        _self.isLoading = false;
      }
    }, error => {
      toastr.error( 'Can\'t get the current leaderboard', 'Leaderboard');
      _self.isLoading = false;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
