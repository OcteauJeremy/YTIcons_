import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealvalueService } from './services/realvalue.service';
import { Router, NavigationEnd } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private realValueService: RealvalueService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        $('html,body').animate({ scrollTop: 0 }, 500);
      }
    });
  }
}
