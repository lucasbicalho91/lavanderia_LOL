import { Component } from '@angular/core'
import { Funcionario } from 'src/app/shared'

@Component({
  selector: 'app-manutencao-funcionarios',
  templateUrl: './manutencao-funcionarios.component.html',
  styleUrls: ['./manutencao-funcionarios.component.css']
})
export class ManutencaoFuncionariosComponent {
  funcionarios: Funcionario[] = [
    { idFuncionario: 1, nomeFuncionario: 'User 1', cpf: '000.000.000-00', email: 'user1@email.com', senha: '*********', dataNascimento: new Date('1985-02-21'), habilitada: false },
    { idFuncionario: 2, nomeFuncionario: 'User 2', cpf: '000.000.000-01', email: 'user2@email.com', senha: '*******', dataNascimento: new Date('1988-07-12'), habilitada: false },
  ];

  linhaSelecionada: number | null = null;

  adicionarNovaLinha(): void {
    const novoFuncionario: Funcionario = {
      idFuncionario: 0,
      nomeFuncionario: '',
      cpf: '',
      email: '',
      senha: '',
      dataNascimento: new Date(''),
      habilitada: true,
    };
    this.funcionarios.push(novoFuncionario);
    this.linhaSelecionada = 0;
  }

  selecionarLinha(index: Funcionario): void {
    this.linhaSelecionada = index.idFuncionario;
    index.habilitada = true;
  }

  excluirLinha(obj: Funcionario, indice: number): void {
    if (obj !== null) {
      this.funcionarios.splice(indice, 1);
    }
  }

  salvarEdicao(obj: Funcionario): void {
    this.linhaSelecionada = null;
    obj.habilitada = false;
  }
}
