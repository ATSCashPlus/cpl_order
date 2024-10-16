import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  username = '';

  layoutService = inject(LayoutService);
  router = inject(Router)

  onSubmit() {
    this.layoutService.setUserInfo({
      username: this.username,
      tableNo: 20
    });

    this.router.navigate(['']);
  }
}
