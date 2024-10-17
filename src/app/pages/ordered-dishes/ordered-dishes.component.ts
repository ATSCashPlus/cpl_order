import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// Models
import { IDish } from '@models/dish.interface';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-ordered-dishes',
  standalone: true,
  imports: [],
  templateUrl: './ordered-dishes.component.html',
  styleUrl: './ordered-dishes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderedDishesComponent {
  private navigationService = inject(NavigationService);

  dishes: IDish[] = [];

  onGotoCategory() {
    this.navigationService.goToCategory();
  }
}
