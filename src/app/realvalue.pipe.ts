import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realvalue'
})
export class RealvaluePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
