import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {

  constructor() { }

  sendEvent(eventCategory: string, eventAction: string) {
    (<any>window).ga('send', 'event', { eventCategory: eventCategory, eventAction: eventAction});
  }
}
