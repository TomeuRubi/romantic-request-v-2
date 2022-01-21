import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeckMenuPageRoutingModule } from './deck-menu-routing.module';

import { DeckMenuPage } from './deck-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeckMenuPageRoutingModule
  ],
  declarations: [DeckMenuPage]
})
export class DeckMenuPageModule {}
