import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dishes-status',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dishes-status.component.html',
  styleUrl: './dishes-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishesStatusComponent {

}
