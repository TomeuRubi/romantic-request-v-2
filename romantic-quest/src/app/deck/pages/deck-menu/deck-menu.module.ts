import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeckMenuPageRoutingModule } from './deck-menu-routing.module';

import { DeckMenuPage } from './deck-menu.page';
import { TranslateModule } from '@ngx-translate/core';
import { DeckPopoverMenuComponent } from '../../deck-popover-menu/deck-popover-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DeckMenuPageRoutingModule
  ],
  declarations: [DeckMenuPage, DeckPopoverMenuComponent]
})
export class DeckMenuPageModule {}
