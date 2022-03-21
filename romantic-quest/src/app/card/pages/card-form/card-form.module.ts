import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardFormPageRoutingModule } from './card-form-routing.module';

import { CardFormPage } from './card-form.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardFormPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [CardFormPage]
})
export class CardFormPageModule {}
