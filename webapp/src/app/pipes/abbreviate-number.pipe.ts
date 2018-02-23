import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  public units = ['K', 'M', 'B', 'T'];

  transform(value: any, args?: any): any {

    //console.log(value.toFixed(3));
    var isNegative = value < 0;

    var abbreviatedNumber;
    if (value < 1000000) {
      abbreviatedNumber = this.abbreviate(Math.abs(value), 0);
    } else {
      abbreviatedNumber = this.abbreviate(Math.abs(value), 0);
    }

    return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
  }

  abbreviate(number, decPlaces) {
    decPlaces = Math.pow(10, decPlaces);
    var numberOrigin = number;

    for (var i = this.units.length - 1; i >= 0; i--) {

      var size = Math.pow(10, (i + 1) * 3);
      // console.log(numberOrigin, size);

      if (size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces;

        // console.log("New number:", numberOrigin, number);
        if ((number === 1000) && (i < this.units.length - 1)) {
          number = 1;
          i++
        }

        number += this.units[i];

        break
      }
    }

    return number;
  }

}
