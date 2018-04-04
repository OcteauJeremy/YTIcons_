import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeBetween'
})
export class TimeBetweenPipe implements PipeTransform {

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

      if (diffHours >= 0 && !diffDays && !diffWeeks && !diffMonths && !diffYears) {
        return diffHours + 'H';
      }
      if (diffWeeks > 0 && !diffMonths && !diffYears) {
        return diffWeeks + 'W';
      }
      if (diffMonths > 0 && !diffYears) {
        return diffMonths + 'M';
      }
      else if (diffYears > 0) {
        return diffYears + 'Y';
      }
      return diffDays + 'D';
    }
    return 0;

  }

}
