import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InGamePage } from './in-game.page';

const routes: Routes = [
  {
    path: '',
    component: InGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InGamePageRoutingModule {}
