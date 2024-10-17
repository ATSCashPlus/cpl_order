import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-waiting-room',
  standalone: true,
  imports: [],
  templateUrl: './waiting-room.component.html',
  styleUrl: './waiting-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingRoomComponent {

}
