import { ChangeDetectionStrategy, Component } from '@angular/core';
// Models
import { IDish } from '@models/dish.interface';

@Component({
  selector: 'app-ordered',
  standalone: true,
  imports: [],
  templateUrl: './ordered.component.html',
  styleUrl: './ordered.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderedComponent {

  dishes: IDish[] = [
    {avatar: 'images/dishes/pic01.png'},
    {avatar: 'images/dishes/pic02.png'},
    {avatar: 'images/dishes/pic03.png'},
    {avatar: 'images/dishes/pic04.png'},
    {avatar: 'images/dishes/pic05.png'},
  ]
}
