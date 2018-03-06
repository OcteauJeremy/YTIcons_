import {ApplicationRef, Component, ComponentFactoryResolver, NgZone, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ToastOptions, ToastsManager } from 'ng2-toastr';
import { SocketService } from './services/socket.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private toastManager: ToastsManager;

  constructor(private router: Router, private as: AuthenticationService, private toastr: ToastsManager, private vcr: ViewContainerRef,
              private socketService: SocketService,
              private app: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver, private ngZone: NgZone) {
    this.toastr.setRootViewContainerRef(vcr);

    const options = {
      animate: 'fade',
      positionClass: 'toast-bottom-left',
      dismiss: 'auto',
      showCloseButton: true,
      newestOnTop: true,
      enableHTML: true,
      maxShown: 3,
      messageClass: '',
      titleClass: '',
      toastLife: 3000
    };
    this.toastManager = new ToastsManager(this.componentFactoryResolver, this.ngZone, this.app, options);
    this.toastManager.setRootViewContainerRef(vcr);

    this.socketService.initSocket();

    this.socketService.onEvent('live-info').subscribe((tx: any) => {
      console.log(tx);
      if (tx) {
        this.toastManager.info((tx.to.username != '' ? tx.to.username : 'Anonymous') + ' collect a new Icon for ' +
          tx.price.toFixed(4).toString() + ' ETH', tx.card.name);
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        $('html,body').animate({ scrollTop: 0 }, 500);
        (<any>window).ga('set', 'page', evt.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  ngOnDestroy() {
    this.toastManager.clearAllToasts();
    this.toastManager.dispose();
  }
}
