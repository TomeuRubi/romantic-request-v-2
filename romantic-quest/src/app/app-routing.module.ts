import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./pages/selection/selection.module').then( m => m.SelectionPageModule)
  },  {
    path: 'in-game',
    loadChildren: () => import('./game/pages/in-game/in-game.module').then( m => m.InGamePageModule)
  },
  {
    path: 'card-menu',
    loadChildren: () => import('./pages/card-menu/card-menu.module').then( m => m.CardMenuPageModule)
  },
  {
    path: 'deck-menu',
    loadChildren: () => import('./pages/deck-menu/deck-menu.module').then( m => m.DeckMenuPageModule)
  },
  {
    path: 'card-form',
    loadChildren: () => import('./card/pages/card-form/card-form.module').then( m => m.CardFormPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
