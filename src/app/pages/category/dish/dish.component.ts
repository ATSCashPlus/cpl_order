import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IDish } from '@models/dish.interface';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishComponent {
  dish = input.required<IDish>();
}
