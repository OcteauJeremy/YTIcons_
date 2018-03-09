import {Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer, Renderer2} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Renderer3 } from '@angular/core/src/render3/renderer';
import {Card} from "../../models/Card";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {

  @Input("showPopup") showPopup: boolean;
  public currentUser = null;
  public hidden = true;
  private subscriptions: Subscription = new Subscription();

  constructor(private as: AuthenticationService, public router: Router, private el: ElementRef, private renderer: Renderer2) {
    this.subscriptions.add(this.as.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    }));
    this.currentUser = this.as.currentUser;
  }

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    this.currentUser = this.as.currentUser;
    setTimeout(_ => {
      this.hidden = false;
    }, 200);
    return this.currentUser ? true : false;
  }

  isAdmin() {
    return !!(this.currentUser && this.currentUser.roles.indexOf('admin') > -1);
  }

  closeNavbar() {
    this.renderer.removeClass(this.el.nativeElement.querySelector('#bs-example-navbar-collapse-1'), 'in');
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onDocumentClick($event) {
    if (!this.el.nativeElement.querySelector('#bs-example-navbar-collapse-1').contains($event.target)) { // or some similar check
      this.renderer.removeClass(this.el.nativeElement.querySelector('#bs-example-navbar-collapse-1'), 'in');
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
