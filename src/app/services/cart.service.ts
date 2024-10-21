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
      avatar: 'images/dishes/pic01.jpg',
      categoryId: 2,
      status: EDishStatusEnum.AVAILABLE,
quantity: 2,
    },
    {
      id: 2,
      title: 'Gà Sốt Ngọt',
      description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn cùng sốt ngọt độc quyền nhà No...',
      price: 170000,
      priceOutdated: null,
      avatar: 'images/dishes/pic02.jpg',
      categoryId: 2,
      status: EDishStatusEnum.AVAILABLE,
quantity: 1,
    },
    {
      id: 3,
      title: 'Gà Lắc Phô Mai',
      description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn lắc cùng bột phô mai mịn thơm...',
      price: 180000,
      priceOutdated: null,
      avatar: 'images/dishes/pic03.jpg',
      categoryId: 2,
      status: EDishStatusEnum.AVAILABLE,
quantity: 3,
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
