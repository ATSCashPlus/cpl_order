import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { DishComponent } from './dish/dish.component';
import { CartComponent } from './cart/cart.component';
// Models
import { IDish } from '@models/dish.interface';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    DishComponent,
    CartComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {

  dishes: IDish[] = [
    {avatar: 'images/dishes/pic01.png'},
    {avatar: 'images/dishes/pic02.png'},
    {avatar: 'images/dishes/pic03.png'},
    {avatar: 'images/dishes/pic04.png'},
    {avatar: 'images/dishes/pic05.png'},
    {avatar: 'images/dishes/pic06.png'},
    {avatar: 'images/dishes/pic01.png'},
    {avatar: 'images/dishes/pic02.png'},
    {avatar: 'images/dishes/pic03.png'},
    {avatar: 'images/dishes/pic04.png'},
    {avatar: 'images/dishes/pic05.png'},
    {avatar: 'images/dishes/pic06.png'},
  ]
}
