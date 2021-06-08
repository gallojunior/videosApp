import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmyOfDeadPageRoutingModule } from './army-of-dead-routing.module';

import { ArmyOfDeadPage } from './army-of-dead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmyOfDeadPageRoutingModule
  ],
  declarations: [ArmyOfDeadPage]
})
export class ArmyOfDeadPageModule {}
