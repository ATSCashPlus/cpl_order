import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { IDish } from '@models/dish.interface';
import { DotSeparatorPipe } from '@pipes/dot-separator.pipe';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule, DotSeparatorPipe],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms 300ms ease-in', style({ opacity: 1}))
      ])
    ]),
  ]
})
export class DishComponent {
  updateQuantity = output<{dish: IDish, quantity: number}>();
  dish = input.required<IDish>();

  showAmountControl = signal(false);

  onUpdateQuantity(quantity: number) {
    const dish = this.dish();

    if ( quantity <= -1 && !dish.quantity ) return;
    if ( quantity <= -1 && dish.quantity === 1 ) {
      this.showAmountControl.set(false);
    }

    this.updateQuantity.emit({
      dish, quantity
    });
  }

  onShowAmountControl() {
    this.showAmountControl.set(true);
  }
}