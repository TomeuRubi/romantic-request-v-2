import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMenuPageRoutingModule } from './card-menu-routing.module';

import { CardMenuPage } from './card-menu.page';
import { CardPopoverMenuComponent } from 'src/app/components/card-popover-menu/card-popover-menu.component';
import { TranslateModule } from '@ngx-translate/core';

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
