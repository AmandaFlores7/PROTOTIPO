import { isNgTemplate } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { VerMenuAdministradorComponent } from './Pages/ver-menu-administrador/ver-menu-administrador.component';
import { VerMenuComponent } from './Pages/ver-menu/ver-menu.component';
import { EditarItemComponent } from './Pages/ver-menu-administrador/editar-item/editar-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: InicioComponent },
  { path: 'VerMenu', component: VerMenuComponent },
  { path: 'VerMenuAdministrador', component: VerMenuAdministradorComponent },
  { path: 'VerMenuAdministrador/:idItem', component: EditarItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
