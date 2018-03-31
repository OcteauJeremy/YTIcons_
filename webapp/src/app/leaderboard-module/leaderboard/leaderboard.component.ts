import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ManagerService} from "../../services/manager.service";
import {LeaderboardService} from "../../services/leaderboard.service";
import {Subscription} from "rxjs/Subscription";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastsManager} from 'ng2-toastr';
import {CardService} from "../../services/card.service";
import {RoundPipe} from "../../pipes/round.pipe";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private roundPipe: RoundPipe, private ms: ManagerService, private ls: LeaderboardService, private as: AuthenticationService, private toastr: ToastsManager, private cs: CardService) {

  }

  public leaderboard: any;
  public ranking;
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

    }).then(res => {
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


    this.subscriptions.add(toastr.onClickToast().subscribe(toast => {
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
      toastr.error('Can\'t get the current leaderboard', 'Leaderboard');
      _self.isLoading = false;
    }));
  }

  getTimeRemaining(endtime) {
    let _d = new Date();
    var t = Date.parse(endtime) - Date.parse(_d.toString());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  initializeClock(id, endtime) {
    let _self = this;
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = _self.getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days.toString();
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }


  ngAfterViewInit() {
    let deadline = new Date(Date.UTC(2018, 3, 15, 11, 59, 59));
    this.initializeClock('clockdiv', deadline);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
