import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pipes
import { DotSeparatorPipe } from '@pipes/dot-separator.pipe';
import { TotalPipe } from '@pipes/total.pipe';
import { RouterModule } from '@angular/router';
// Models
import { IDish } from '@models/dish.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TotalPipe,
    DotSeparatorPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  selectingDishes = input.required<IDish[]>();
}
