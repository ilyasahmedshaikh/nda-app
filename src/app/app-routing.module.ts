import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./components/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'nda',
    loadChildren: () => import('./components/nda/nda.module').then(m => m.NdaModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./components/payment/payment.module').then(m => m.PaymentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
