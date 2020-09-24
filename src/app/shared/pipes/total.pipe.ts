import { Pipe, PipeTransform } from '@angular/core';
import { OrderI } from '../interfaces/order-i';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: OrderI, ...args: any[]): number {
    if(value) {
      if(args.length > 0 && args[0] == "ttc") {
        return value.totalTtc();
      } else {
        return value.totalHt();
      }
    }
    return null;
  }

}
