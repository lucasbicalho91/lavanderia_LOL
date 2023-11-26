import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmadoComponent } from './modal-confirmado.component';

describe('ModalConfirmadoComponent', () => {
  let component: ModalConfirmadoComponent;
  let fixture: ComponentFixture<ModalConfirmadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmadoComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
