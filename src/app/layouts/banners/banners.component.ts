import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannersComponent {

}
