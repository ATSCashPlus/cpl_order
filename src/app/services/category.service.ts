import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// Models
import { ICategory } from '@models/category.interface';
import { IDish, EDishStatusEnum } from '@models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<ICategory[]> {
    return of([
      {id: 1, title: 'COMBO', selected: false},
      {id: 2, title: 'Món Gà', selected: true},
      {id: 3, title: 'Cơm & Canh', selected: false},
      {id: 4, title: 'Các Món Lẩu', selected: false},
      {id: 5, title: 'Đồ Uống', selected: false},
      {id: 1, title: 'COMBO', selected: false},
      {id: 2, title: 'Món Gà', selected: true},
      {id: 3, title: 'Cơm & Canh', selected: false},
      {id: 4, title: 'Các Món Lẩu', selected: false},
      {id: 5, title: 'Đồ Uống', selected: false},
    ]);
  }

  getDishes(): Observable<IDish[]> {
    return of([
      {
        id: 1,
        title: 'Gà Viên Hành Tây Sốt Kem',
        description: 'Suất gà dành cho 1-2 người. Gồm gà viên chiên quyện cùng sốt kem béo ngậy.',
        price: 180000,
        priceOutdated: 199000,
        avatar: 'images/dishes/pic01.jpg',
        categoryId: 2,
        status: EDishStatusEnum.AVAILABLE,
quantity: 0,
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
quantity: 0,
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
quantity: 0,
      },
      {
        id: 4,
        title: 'Gà Rán',
        description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn.',
        price: 150000,
        priceOutdated: 200000,
        avatar: 'images/dishes/pic04.jpg',
        categoryId: 2,
        status: EDishStatusEnum.AVAILABLE,
quantity: 0,
      },
      {
        id: 5,
        title: 'Gà Giòn Xì Dầu',
        description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn tắm sốt xì dầu thơm ngon.',
        price: 175000,
        priceOutdated: null,
        avatar: 'images/dishes/pic05.jpg',
        categoryId: 2,
        status: EDishStatusEnum.AVAILABLE,
quantity: 0,
      },
      {
        id: 6,
        title: 'Cánh Đùi Mật Ong',
        description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn tắm sốt xì dầu thơm ngon.',
        price: 175000,
        priceOutdated: null,
        avatar: 'images/dishes/pic06.jpg',
        categoryId: 2,
        status: EDishStatusEnum.AVAILABLE,
quantity: 0,
      },
      {
        id: 7,
        title: 'Cánh Đùi Mật Ong',
        description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn tắm sốt xì dầu thơm ngon.',
        price: 175000,
        priceOutdated: null,
        avatar: 'images/dishes/pic07.jpg',
        categoryId: 2,
        status: EDishStatusEnum.AVAILABLE,
quantity: 0,
      },
      {
        id: 8,
        title: 'Cánh Đùi Mật Ong',
        description: 'Suất gà dành cho 1-2 người. Gồm 5 miếng gà chiên giòn tắm sốt xì dầu thơm ngon.',
        price: 175000,
        priceOutdated: null,
        avatar: 'images/dishes/pic08.jpg',
        categoryId: 2,
        status: EDishStatusEnum.AVAILABLE,
quantity: 0,
      }
    ]);
  }
}
