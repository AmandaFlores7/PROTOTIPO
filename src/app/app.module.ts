import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerMenuComponent } from './Pages/ver-menu/ver-menu.component';
import { VerMenuAdministradorComponent } from './Pages/ver-menu-administrador/ver-menu-administrador.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { EditarItemComponent } from './Pages/ver-menu-administrador/editar-item/editar-item.component';
import { IrPedidoComponent } from './Pages/ver-menu/ir-pedido/ir-pedido.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'Inicio', component: InicioComponent },
  { path: 'VerMenu', component: VerMenuComponent },
  { path: 'VerMenuAdministrador', component: VerMenuAdministradorComponent },
  { path: 'VerMenuAdministrador/:idItem', component: EditarItemComponent},
  { path: 'IrVerPedido', component: IrPedidoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    VerMenuComponent,
    VerMenuAdministradorComponent,
    InicioComponent,
    EditarItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
