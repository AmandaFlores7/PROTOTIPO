import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-menu',
  templateUrl: './ver-menu.component.html',
  styleUrls: ['./ver-menu.component.scss']
})
export class VerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  IrVerPedido() {
    this.router.navigate(['IrVerPedido']);
  }

}
