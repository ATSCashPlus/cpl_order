import { ChangeDetectionStrategy, Component } from '@angular/core';
// Components
import { InputComponent } from '@components/input/input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
