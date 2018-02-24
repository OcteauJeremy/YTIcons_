import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeBetween'
})
export class TimeBetweenPipe implements PipeTransform {

  transform(_date: Date) {
    let date1 = new Date(_date);
    let date2 = new Date();
    if (_date) {
      var diff = Math.abs(date1.getTime() - date2.getTime());

      var diffMonths: number = date2.getMonth() - date1.getMonth();
      var diffDays: number = date2.getDate() - date1.getDate();
      var diffWeeks: number = Math.floor(diffDays / 7);
      var diffYears: number = date2.getFullYear() - date1.getFullYear();
      diffMonths += 12* diffYears


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
