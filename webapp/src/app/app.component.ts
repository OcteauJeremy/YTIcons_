import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ToastOptions, ToastsManager } from 'ng2-toastr';
import { SocketService } from './services/socket.service';

declare var jquery: any;
declare var $: any;

class ToastCustomOptions extends ToastOptions {
  animate = 'fade';
  positionClass = 'toast-bottom-left';
  dismiss = 'auto';
  showCloseButton = true;
  newestOnTop = true;
  enableHTML = true;
  maxShown = 3;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: ToastOptions,
    useClass: ToastCustomOptions
  }]
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private as: AuthenticationService, public toastr: ToastsManager, vcr: ViewContainerRef,
              private socketService: SocketService) {
    this.toastr.setRootViewContainerRef(vcr);

    this.socketService.initSocket();

    this.socketService.onEvent('live-info').subscribe((tx: any) => {
      console.log(tx);
      if (tx) {
        this.toastr.info((tx.to.username != '' ? tx.to.username : 'Anonymous') + ' collect a new Icon for ' +
          tx.price.toFixed(4).toString() + ' ETH', tx.card.name);
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
