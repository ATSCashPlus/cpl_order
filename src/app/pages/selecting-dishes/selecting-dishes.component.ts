import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
// Services
import { CartService } from 'src/app/services/cart.service';
import { NavigationService } from 'src/app/services/navigation.service';
// Pipes
import { TotalPipe } from 'src/app/pipes/total.pipe';
import { DotSeparatorPipe } from '@pipes/dot-separator.pipe';
// Models
import { IDish } from '@models/dish.interface';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-selecting-dishes',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule, 
    TotalPipe,
    DotSeparatorPipe
  ],
  templateUrl: './selecting-dishes.component.html',
  styleUrl: './selecting-dishes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class SelectingDishesComponent implements OnInit {
  private navigationService = inject(NavigationService);
  private cartService = inject(CartService);

  selectingDishes = signal<IDish[]>([]);
  isShowConfirmDialog = signal(false);

  ngOnInit(): void {
    this.cartService.selectingDishes.subscribe(selectingDishes => {
      this.selectingDishes.set(selectingDishes);
    });
  }

  onGotoCategory() {
    this.navigationService.goToCategory();
  }

  onOrder() {
    this.isShowConfirmDialog.set(true);
  }

  onCloseConfirmDialog() {
    this.isShowConfirmDialog.set(false);
  }

  onConfirm() {
    this.navigationService.gotoWaitingRoom();
  }
}
