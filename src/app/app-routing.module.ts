import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { VerMenuAdministradorComponent } from './Pages/ver-menu-administrador/ver-menu-administrador.component';
import { VerMenuComponent } from './Pages/ver-menu/ver-menu.component';
import {IrPedidoComponent} from './Pages/ver-menu/ir-pedido/ir-pedido.component';

const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: InicioComponent },
  { path: 'VerMenu', component: VerMenuComponent },
  { path: 'VerMenuAdministrador', component: VerMenuAdministradorComponent },
  { path: 'IrVerPedido', component: IrPedidoComponent},
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
