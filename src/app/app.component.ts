import { Component, inject, OnInit, signal } from '@angular/core';
import { filter } from 'rxjs';
import { ActivatedRoute, Router, RouterModule, NavigationEnd } from '@angular/router';
// Components
import { BannersComponent } from '@layouts/banners/banners.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';


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
export class AppComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isShowHerroBanner = signal(false);

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.activatedRoute;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        currentRoute.data.subscribe(data => {
          console.log('Activated child route data:', data);
          this.isShowHerroBanner.set(data['showHerroBanner']);
        });
      });

  }
}
