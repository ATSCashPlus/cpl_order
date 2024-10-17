import { Pipe, PipeTransform } from '@angular/core';
import { IDish } from '@models/dish.interface';

@Pipe({
  name: 'total',
  standalone: true
})
export class TotalPipe implements PipeTransform {

  transform(val: IDish | IDish[], type: 'price' | 'dishes'): number {
    if (type === 'price') {
      if (Array.isArray(val)) {
        return val.reduce((accumulate, currentDish) => {
          return accumulate + currentDish.quantity * currentDish.price;
        }, 0);
      }
  
      const dish = val as IDish;
      return dish.price * dish.quantity;
    } else {
      if (Array.isArray(val)) {
        return val.reduce((accumulate, currentDish) => {
          return accumulate + currentDish.quantity;
        }, 0);
      }
  
      const dish = val as IDish;
      return dish.price;
    }
    
  }

}
