import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// Components
import { InputComponent } from '@components/input/input.component';
// Services
import { LayoutService } from 'src/app/services/layout.service';

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
}
