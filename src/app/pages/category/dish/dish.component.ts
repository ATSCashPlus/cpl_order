import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IDish } from '@models/dish.interface';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishComponent {
  updateQuantity = output<{dish: IDish, quantity: number}>();
  dish = input.required<IDish>();

  onUpdateQuantity(quantity: number) {
    const dish = this.dish();

    if ( quantity <= -1 && !dish.quantity) return;

    this.updateQuantity.emit({
      dish, quantity
    });
  }
}