import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerMenuComponent } from './Pages/ver-menu/ver-menu.component';
import { VerMenuAdministradorComponent } from './Pages/ver-menu-administrador/ver-menu-administrador.component';
import { InicioComponent } from './Pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    VerMenuComponent,
    VerMenuAdministradorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
