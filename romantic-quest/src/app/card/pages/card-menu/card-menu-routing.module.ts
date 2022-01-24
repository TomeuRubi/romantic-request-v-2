import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardMenuPage } from './card-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CardMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardMenuPageRoutingModule {}
