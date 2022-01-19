import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InGamePageRoutingModule } from './in-game-routing.module';

import { InGamePage } from './in-game.page';
import { LevelCounterComponent } from '../../components/level-counter/level-counter.component';
import { CardComponent } from '../../components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InGamePageRoutingModule,
    TranslateModule
  ],
  declarations: [InGamePage,
    LevelCounterComponent,
    CardComponent]
})
export class InGamePageModule {}
