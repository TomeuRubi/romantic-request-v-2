import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InGamePageRoutingModule } from './in-game-routing.module';

import { InGamePage } from './in-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InGamePageRoutingModule
  ],
  declarations: [InGamePage]
})
export class InGamePageModule {}
