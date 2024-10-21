import { Component, inject, OnInit, signal } from '@angular/core';
import { filter } from 'rxjs';
import { ActivatedRoute, Router, RouterModule, NavigationEnd } from '@angular/router';
// Components
import { BannersComponent } from '@layouts/banners/banners.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from '@layouts/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    // Components
    HeaderComponent,
    BannersComponent,
    HomeComponent,
    SearchBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isShowHerroBanner = signal(false);
  isShowHeader = signal(false);
  isShowSearchbar = signal(false);

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.activatedRoute;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        currentRoute.data.subscribe(data => {
          this.isShowHerroBanner.set(data['showHerroBanner']);
          this.isShowHeader.set(data['showHeader']);
          this.isShowSearchbar.set(data['showSearchBar']);
        });
      });

  }
}
