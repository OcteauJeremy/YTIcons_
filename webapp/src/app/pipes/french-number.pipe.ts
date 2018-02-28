import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchNumber'
})
export class FrenchNumberPipe implements PipeTransform {

  transform(val: number): string {
    if (val !== undefined && val !== null) {
      return val.toLocaleString('fr-FR');
    } else {
      return '';
    }
  }

}
