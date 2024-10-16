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
        loadComponent: () => import('./pages/ordered/ordered.component').then((c) => c.OrderedComponent),
        data: { showHerroBanner: true }
    },
];
