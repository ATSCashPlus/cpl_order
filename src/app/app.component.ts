import { Component } from '@angular/core';
// Components
import { BannersComponent } from '@layouts/banners/banners.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    // Components
    HeaderComponent,
    BannersComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cpo';
}
