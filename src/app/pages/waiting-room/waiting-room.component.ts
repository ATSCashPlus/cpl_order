import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashplusNotificationComponent } from '@components/cashplus-notification/cashplus-notification.component';

@Component({
  selector: 'app-waiting-room',
  standalone: true,
  imports: [ RouterModule, CashplusNotificationComponent],
  templateUrl: './waiting-room.component.html',
  styleUrl: './waiting-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingRoomComponent {

}
