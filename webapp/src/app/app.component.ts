import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ToastsManager } from 'ng2-toastr';
import { SocketService } from './services/socket.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private as: AuthenticationService, public toastr: ToastsManager, vcr: ViewContainerRef,
              private socketService: SocketService) {
    this.toastr.setRootViewContainerRef(vcr);

    this.socketService.initSocket();

    this.socketService.onEvent('live-info').subscribe((transaction: any) => {
      if (transaction) {

      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        $('html,body').animate({ scrollTop: 0 }, 500);
      }
    });
  }
}
