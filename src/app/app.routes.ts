import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'loader',
    loadComponent: () => import('./pages/loader/loader.page').then( m => m.LoaderPage)
  },
  { path: '**', redirectTo: '/loader', pathMatch: 'full', },  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },

];
