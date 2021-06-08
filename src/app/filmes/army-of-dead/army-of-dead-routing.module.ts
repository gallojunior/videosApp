import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmyOfDeadPage } from './army-of-dead.page';

const routes: Routes = [
  {
    path: '',
    component: ArmyOfDeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmyOfDeadPageRoutingModule {}
