import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { IDish } from '@models/dish.interface';
import { TotalPipe } from 'src/app/pipes/total.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    TotalPipe,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  selectingDishes = input.required<IDish[]>();

  private navigationService = inject(NavigationService);

  onGotoSelectingDishes() {
    this.navigationService.gotoSelectingDishes();
  }
}
