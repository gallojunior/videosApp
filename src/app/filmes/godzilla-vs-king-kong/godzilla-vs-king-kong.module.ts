import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodzillaVsKingKongPageRoutingModule } from './godzilla-vs-king-kong-routing.module';

import { GodzillaVsKingKongPage } from './godzilla-vs-king-kong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodzillaVsKingKongPageRoutingModule
  ],
  declarations: [GodzillaVsKingKongPage]
})
export class GodzillaVsKingKongPageModule {}
