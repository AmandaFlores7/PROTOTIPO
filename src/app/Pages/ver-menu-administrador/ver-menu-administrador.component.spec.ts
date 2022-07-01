import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMenuAdministradorComponent } from './ver-menu-administrador.component';

describe('VerMenuAdministradorComponent', () => {
  let component: VerMenuAdministradorComponent;
  let fixture: ComponentFixture<VerMenuAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMenuAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMenuAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
