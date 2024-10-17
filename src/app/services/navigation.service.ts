import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  router = inject(Router);

  goToHome() {

  }

  goToCategory() {
    this.router.navigate(['category']);
  }

  goToOrderedDishes() {
    this.router.navigate(['ordered']);
  }

  gotoSelectingDishes() {
    this.router.navigate(['selecting']);
  }

  gotoWaitingRoom() {
    this.router.navigate(['waiting-room']);
  }
}
