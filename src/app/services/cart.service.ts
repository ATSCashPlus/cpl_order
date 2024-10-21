import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDish, EDishStatusEnum } from '@models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectingDishes = new BehaviorSubject<IDish[]>([]);
  orderedDishes = new BehaviorSubject<IDish[]>([]);

  updateSelectingDishes(dish: IDish, quantity: number) {
    const selectingDishes = JSON.parse(JSON.stringify(this.selectingDishes.value)) as IDish[];
    const existingDishesIndex = selectingDishes.findIndex(it => it.id === dish.id);

    if (existingDishesIndex !== -1) {
      selectingDishes[existingDishesIndex].quantity += quantity;

      if ( selectingDishes[existingDishesIndex].quantity === 0 ) {
        selectingDishes.splice(existingDishesIndex, 1);
      }

    } else {
      selectingDishes.push({
        ...dish,
        quantity: 1
      })
    }

    this.selectingDishes.next(selectingDishes);
  }


}
