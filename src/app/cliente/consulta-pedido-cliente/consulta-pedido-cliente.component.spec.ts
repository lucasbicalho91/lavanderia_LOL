import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPedidoClienteComponent } from './consulta-pedido-cliente.component';

describe('ConsultaPedidoClienteComponent', () => {
  let component: ConsultaPedidoClienteComponent;
  let fixture: ComponentFixture<ConsultaPedidoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaPedidoClienteComponent]
    });
    fixture = TestBed.createComponent(ConsultaPedidoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
