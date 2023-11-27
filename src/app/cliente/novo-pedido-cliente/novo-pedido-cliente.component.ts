import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido.service';
import { RoupaService } from 'src/app/services/roupa.service';
import { Pedido, Roupa } from 'src/app/shared';

@Component({
  selector: 'app-novo-pedido-cliente',
  templateUrl: './novo-pedido-cliente.component.html',
  styleUrls: ['./novo-pedido-cliente.component.css']
})
export class NovoPedidoClienteComponent implements OnInit {
  @ViewChild('formPedido') formPedido! : NgForm;
  pedido: Pedido = new Pedido();
  roupas: Roupa[] = [];

  constructor(
    private pedidoService: PedidoService,
    private roupaService: RoupaService) { }

  ngOnInit(): void {
    // Cris uma instância vazia, para não dar erro de referência
    this.pedido = new Pedido();
    this.roupas = this.roupaService.listarTodos();
    }

}
