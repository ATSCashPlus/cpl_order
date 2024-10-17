import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { concat, forkJoin, of } from 'rxjs';
// Components
import { DishComponent } from './dish/dish.component';
import { CartComponent } from './cart/cart.component';
// Services
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';

// Models
import { IDish } from '@models/dish.interface';
import { ICategory } from '@models/category.interface';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    DishComponent,
    CartComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit{
  private categoryService = inject(CategoryService);
  private cartService = inject(CartService);

  dishes = signal<IDish[]>([]);
  selectingDishes = signal<IDish[]>([]);
  selectedCategoryTitle = signal('');
  categories = signal<ICategory[]>([]);

  ngOnInit(): void {
    forkJoin({
      categories: this.categoryService.getCategories(),
      dishes: this.categoryService.getDishes()
    }).subscribe(({categories, dishes}) => {
      const selectedCategory = categories.find(it => it.selected);
      this.selectedCategoryTitle.set(selectedCategory?.title ?? '');
      this.categories.set(categories);

      this.cartService.selectingDishes.subscribe(selectingDishes => {
        this.selectingDishes.set(selectingDishes);
        dishes = dishes.map(it => {
          const existingDish = selectingDishes.find(selectingDish => selectingDish.id === it.id);
          return existingDish ? { ...existingDish } : { ...it, quantity: 0 };
        });
        this.dishes.set(dishes);
      });
    });
  }

  onSelectCategory(category: ICategory) {
    this.selectedCategoryTitle.set(category.title);

    this.categories.update(oldCats => {
      return oldCats.map(it => ({...it, selected: it.id === category.id}));
    });
  }

  onUpdateQuantity({dish, quantity}: {dish: IDish, quantity: number}) {
    this.cartService.updateSelectingDishes(dish, quantity);
  }


}
