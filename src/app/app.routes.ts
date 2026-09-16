import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'loader',
    loadComponent: () => import('./pages/loader/loader.page').then( m => m.LoaderPage)
  },
  // Always place the wildcard route at the absolute bottom
  { path: '**', redirectTo: '/loader', pathMatch: 'full', },
];
