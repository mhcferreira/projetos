import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-usuario', loadChildren: './usuario/salvar-usuario/salvar-usuario.module#SalvarUsuarioPageModule' },
  { path: 'listar-usuario', loadChildren: './usuario/listar-usuario/listar-usuario.module#ListarUsuarioPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
