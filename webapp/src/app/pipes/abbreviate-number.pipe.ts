import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  public units = ['K', 'M', 'B', 'T'];

  transform(value: any, args?: any): any {

    var isNegative = value < 0;

    var abbreviatedNumber;
    abbreviatedNumber = this.abbreviate(Math.abs(value), 1);

    return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
  }

  abbreviate(number, decPlaces) {
    decPlaces = Math.pow(10, decPlaces);
    var numberOrigin = number;

    for (var i = this.units.length - 1; i >= 0; i--) {

      var size = Math.pow(10, (i + 1) * 3);

      if (size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces;

        if ((number === 1000) && (i < this.units.length - 1)) {
          number = 1;
          i++
        }

        var numberStr = number.toString();

        var splitNumber = numberStr.split('.');
        if (splitNumber.length > 1) {
          if (splitNumber[0].length == 3) {
            numberStr = splitNumber[0];
          } else {
            numberStr = splitNumber[0] + '.' + splitNumber[1].charAt(0);
          }
          number = parseFloat(numberStr);
        }

        number += this.units[i];

        break
      }
    }

    return number;
  }

}
