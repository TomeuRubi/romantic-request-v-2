import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeckFormPageRoutingModule } from './deck-form-routing.module';

import { DeckFormPage } from './deck-form.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DeckFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeckFormPage]
})
export class DeckFormPageModule {}
