import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFuncionarioComponent } from './relatorio-funcionario.component';

describe('RelatorioFuncionarioComponent', () => {
  let component: RelatorioFuncionarioComponent;
  let fixture: ComponentFixture<RelatorioFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioFuncionarioComponent]
    });
    fixture = TestBed.createComponent(RelatorioFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
