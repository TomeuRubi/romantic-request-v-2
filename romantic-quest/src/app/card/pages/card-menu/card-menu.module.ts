import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMenuPageRoutingModule } from './card-menu-routing.module';

import { CardMenuPage } from './card-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardMenuPageRoutingModule
  ],
  declarations: [CardMenuPage]
})
export class CardMenuPageModule {}
