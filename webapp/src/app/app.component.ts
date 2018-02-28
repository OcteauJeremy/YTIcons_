import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import fontawesome from '@fortawesome/fontawesome';
import faEthereum from '@fortawesome/fontawesome-free-brands';
import { faDollarSign, faEuroSign } from '@fortawesome/fontawesome-free-solid';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private as: AuthenticationService) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        $('html,body').animate({ scrollTop: 0 }, 500);
      }
    });
    fontawesome.library.add(faEthereum);
    fontawesome.library.add(faDollarSign);
    fontawesome.library.add(faEuroSign);
  }
}
