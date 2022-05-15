import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeckFormPage } from './deck-form.page';

const routes: Routes = [
  {
    path: '',
    component: DeckFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckFormPageRoutingModule {}
