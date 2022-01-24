import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardFormPage } from './card-form.page';

const routes: Routes = [
  {
    path: '',
    component: CardFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardFormPageRoutingModule {}
