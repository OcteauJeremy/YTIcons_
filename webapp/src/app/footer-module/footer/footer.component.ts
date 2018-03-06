import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  socialEvent(socialMedia: string) {
    this.analytics.sendEvent('Social media', socialMedia);
  }
}
