import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMenuPageRoutingModule } from './card-menu-routing.module';

import { CardMenuPage } from './card-menu.page';
import { TranslateModule } from '@ngx-translate/core';
import { CardPopoverMenuComponent } from '../../card-popover-menu/card-popover-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardMenuPageRoutingModule,
    TranslateModule
  ],
  declarations: [CardMenuPage, CardPopoverMenuComponent]
})
export class CardMenuPageModule {}
