import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDish, EDishStatusEnum } from '@models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectingDishes = new BehaviorSubject<IDish[]>([
    {
      id: 1,
      title: 'Gà Viên Hành Tây Sốt Kem',
      description: 'Suất gà dành cho 1-2 người. Gồm gà viên chiên quyện cùng sốt kem béo ngậy.',
      price: 180000,
      priceOutdated: 199000,
      avatar: 'images/dishes/pic01.png',
      categoryId: 2,
      status: EDishStatusEnum.AVAILABLE,
      quantity: 2
    },
  ]);
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
