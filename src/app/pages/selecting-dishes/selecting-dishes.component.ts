import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { CartService } from 'src/app/services/cart.service';
import { NavigationService } from 'src/app/services/navigation.service';
// Pipes
import { TotalPipe } from 'src/app/pipes/total.pipe';
// Models
import { IDish } from '@models/dish.interface';


@Component({
  selector: 'app-selecting-dishes',
  standalone: true,
  imports: [CommonModule, TotalPipe],
  templateUrl: './selecting-dishes.component.html',
  styleUrl: './selecting-dishes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectingDishesComponent implements OnInit {
  private navigationService = inject(NavigationService);
  private cartService = inject(CartService);

  selectingDishes = signal<IDish[]>([]);

  ngOnInit(): void {
    this.cartService.selectingDishes.subscribe(selectingDishes => {
      this.selectingDishes.set(selectingDishes);
    });
  }

  onGotoCategory() {
    this.navigationService.goToCategory();
  }
}
