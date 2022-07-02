import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { productos, ListaProductos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss']
})
export class EditarItemComponent implements OnInit {

  Lista=ListaProductos;

  constructor(
    private ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{

    })
  }

  ngOnInit(): void {
  }


  editarProducto(id:number) {
    let productoBuscado = ListaProductos.find(item => item.id === id);

  }

}
