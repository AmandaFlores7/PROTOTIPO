import { ListaProductos, productos } from './../../interfaces/productos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-menu-administrador',
  templateUrl: './ver-menu-administrador.component.html',
  styleUrls: ['./ver-menu-administrador.component.scss']
})
export class VerMenuAdministradorComponent implements OnInit {

  Lista=ListaProductos;

  constructor(
    private ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{

    })
  }

  ngOnInit(): void {
  }

  

}
