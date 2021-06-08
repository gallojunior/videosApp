import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'army-of-dead',
    loadChildren: () => import('./filmes/army-of-dead/army-of-dead.module').then( m => m.ArmyOfDeadPageModule)
  },
  {
    path: 'godzilla-vs-king-kong',
    loadChildren: () => import('./filmes/godzilla-vs-king-kong/godzilla-vs-king-kong.module').then( m => m.GodzillaVsKingKongPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
