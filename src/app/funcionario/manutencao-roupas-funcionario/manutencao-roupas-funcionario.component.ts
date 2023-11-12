import { Component } from '@angular/core';
import { Roupa } from 'src/app/shared';


@Component({
  selector: 'app-manutencao-roupas-funcionario',
  templateUrl: './manutencao-roupas-funcionario.component.html',
  styleUrls: ['./manutencao-roupas-funcionario.component.css']
})
export class ManutencaoRoupasFuncionarioComponent {
  roupas: Roupa[] = [
    { idRoupa: 1, nomPecaRoupa: 'Camiseta', precoRoupa: 20.00, prazoLavagemRoupa: 2, habilitada: false },
    { idRoupa: 2, nomPecaRoupa: 'Calça Jeans', precoRoupa: 50.00, prazoLavagemRoupa: 3, habilitada: false },
  ];

  linhaSelecionada: number | null = null;

  adicionarNovaLinha(): void {
    const novaRoupa: Roupa = {
      idRoupa: 0,
      nomPecaRoupa: '',
      precoRoupa: 0,
      prazoLavagemRoupa: 0,
      habilitada: true,
    };
    this.roupas.push(novaRoupa);
    this.linhaSelecionada = 0;
  }

  selecionarLinha(index: Roupa): void {
    this.linhaSelecionada = index.idRoupa;
    index.habilitada = true;
  }

  excluirLinha(obj: Roupa): void {
    if (obj !== null) {
      this.roupas.splice(obj.idRoupa, 1);
    }
  }

  salvarEdicao(obj: Roupa): void {
    this.linhaSelecionada = null;
  }
}
