import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  momentForm: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private formBuilder: FormBuilder) {
    this.momentForm = this.formBuilder.group({
      nomeCliente: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  inserir() {
    if (this.momentForm.valid) {
      this.cliente = this.momentForm.value;
      console.log('Inserindo cliente:', this.cliente);
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
