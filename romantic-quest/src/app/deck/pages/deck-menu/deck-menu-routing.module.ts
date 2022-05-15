import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeckMenuPage } from './deck-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DeckMenuPage
  },
  {
    path: 'deck-form',
    loadChildren: () => import('../deck-form/deck-form.module').then( m => m.DeckFormPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckMenuPageRoutingModule {}
