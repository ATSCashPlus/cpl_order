import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// Components
import { InputComponent } from '@components/input/input.component';
// Services
import { LayoutService } from '@services/layout.service';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  layoutService = inject(LayoutService);
  navigationService = inject(NavigationService);


  onGotoOrderedDishes() {
    this.navigationService.goToOrderedDishes();
  }

  onGotoCategory() {
    console.log('go to category')
    this.navigationService.goToCategory()
  }
}
