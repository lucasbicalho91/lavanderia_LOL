import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { RoupaService } from 'src/app/services/roupa.service';
import { Pedido, Roupa } from 'src/app/shared';

@Component({
  selector: 'app-novo-pedido-cliente',
  templateUrl: './novo-pedido-cliente.component.html',
  styleUrls: ['./novo-pedido-cliente.component.css']
})
export class NovoPedidoClienteComponent implements OnInit {
  pedido: Pedido = new Pedido();
  roupas: Roupa[] = [];
  roupaSelecionada: Roupa | undefined;

  constructor(
    private pedidoService: PedidoService,
    private roupaService: RoupaService
  ) {}

  ngOnInit(): void {
    this.roupas = this.roupaService.listarTodos();
  }

  adicionarItem(): void {
    const roupasPedido = this.pedido?.roupas ?? [];
    let valorPedido = this.pedido?.valor ?? 0;
    const pedidos = this.pedidoService.listarTodos();
    const maxId = Math.max(...pedidos.map(pedido => pedido.idPedido || 0));
    const proximoId = maxId + 1;
    if (this.roupaSelecionada && this.roupaSelecionada.precoRoupa !== undefined) {
      roupasPedido.push({
        idPedido: proximoId,
        idRoupa: this.roupaSelecionada.idRoupa,
        nomeRoupa: this.roupaSelecionada.nomPecaRoupa,
        valorLavagemPeca: Number(this.roupaSelecionada.precoRoupa),
      });

      valorPedido += Number(this.roupaSelecionada.precoRoupa)
      this.roupaSelecionada = undefined;
      if (this.pedido) {
        this.pedido.roupas = roupasPedido;
        this.pedido.valor = valorPedido;
      }
    }
  }

  aceitarOrcamento(): void {
    
  }

  onSubmit(): void {
    // Adicionar lógica para enviar o pedido para o serviço ou onde for necessário
    console.log('Pedido submetido:', this.pedido);
    //this.pedidoService.enviarPedido(this.pedido);
  }

}
