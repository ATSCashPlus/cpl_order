import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
        data: { showHerroBanner: true },
    },
    {
        path: 'welcome',
        loadComponent: () => import('./pages/welcome/welcome.component').then((c) => c.WelcomeComponent),
        data: { showHerroBanner: true },
    },
    {
        path: 'category',
        loadComponent: () => import('./pages/category/category.component').then((c) => c.CategoryComponent),
        data: { showHerroBanner: true }
    },
    {
        path: 'ordered',
        loadComponent: () => import('./pages/ordered-dishes/ordered-dishes.component').then((c) => c.OrderedDishesComponent),
        data: { showHerroBanner: false }
    },
    {
        path: 'selecting',
        loadComponent: () => import('./pages/selecting-dishes/selecting-dishes.component').then((c) => c.SelectingDishesComponent),
        data: { showHerroBanner: false }
    },
    {
        path: 'waiting-room',
        loadComponent: () => import('./pages/waiting-room/waiting-room.component').then((c) => c.WaitingRoomComponent),
        data: { showHerroBanner: false }
    },
    {
        path: 'bill',
        loadComponent: () => import('./pages/bill/bill.component').then((c) => c.BillComponent),
        data: { showHerroBanner: false }
    },
];
