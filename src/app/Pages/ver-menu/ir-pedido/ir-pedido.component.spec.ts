import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrPedidoComponent } from './ir-pedido.component';

describe('IrPedidoComponent', () => {
  let component: IrPedidoComponent;
  let fixture: ComponentFixture<IrPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
