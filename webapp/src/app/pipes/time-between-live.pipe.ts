import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeBetweenLive'
})
export class TimeBetweenLivePipe implements PipeTransform {

  transform(_date: Date) {
    let date1 = new Date(_date);
    let date2 = new Date();
    if (_date) {

      let diff = Math.abs(date1.getTime() - date2.getTime());
      let diffSeconds_full = diff/1000;

      let diffYears = Math.floor(diffSeconds_full / 31536000);
      let rest_years = Math.floor(diffSeconds_full % 31536000);

      let diffMonths = Math.floor(rest_years / 2592000);
      let rest_months = Math.floor(rest_years % 2592000);

      let diffWeeks = Math.floor(rest_months / 86400 / 7);

      let diffDays = Math.floor(diffSeconds_full % 2592000 / 86400 % 7);
      let diffHours = Math.floor(diffSeconds_full % 86400 / 3600);
      let diffMinutes = Math.floor(diffSeconds_full % 3600 / 60);
      let diffSeconds = Math.floor(diffSeconds_full % 3600 % 60);


      // var diff = Math.abs(date1.getTime() - date2.getTime());
      //
      // var diffMonths: number = date2.getMonth() - date1.getMonth();
      // var diffDays: number = date2.getDate() - date1.getDate();
      // var diffWeeks: number = Math.floor(diffDays / 7);
      // var diffYears: number = date2.getFullYear() - date1.getFullYear();
      // var diffHours: number = date2.getHours() - date1.getHours();
      // var diffMinutes: number = date2.getMinutes() - date1.getMinutes();
      // var diffSeconds: number = date2.getSeconds() - date1.getSeconds();

      if (diffSeconds >= 0 && !diffMinutes && !diffHours && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
        return diffSeconds + 's';
      }
      if (diffMinutes >= 0 && !diffHours && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
        return diffMinutes + 'm';
      }
      if (diffHours >= 0 && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
        return diffHours + 'h';
      }
      if (diffWeeks > 0 && !diffMonths && !diffYears) {
        return diffWeeks + 'w';
      }
      if (diffMonths > 0 && !diffYears) {
        return diffMonths + 'mo';
      }
      else if (diffYears > 0) {
        return diffYears + 'y';
      }
      return diffDays + 'd';
    }
    return 0;
  }

}
