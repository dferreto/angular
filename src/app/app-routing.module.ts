import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'mantenimiento', loadChildren: () => import('./pages/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule) }, { path: 'mantenimiento', loadChildren: () => import('./pages/mantenimientos/clientes/clientes.module').then(m => m.ClientesModule) }, { path: 'login', loadChildren: () => import('./pages/seguridad/seguridad.module').then(m => m.SeguridadModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
