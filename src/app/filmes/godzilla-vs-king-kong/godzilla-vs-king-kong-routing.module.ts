import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodzillaVsKingKongPage } from './godzilla-vs-king-kong.page';

const routes: Routes = [
  {
    path: '',
    component: GodzillaVsKingKongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodzillaVsKingKongPageRoutingModule {}
