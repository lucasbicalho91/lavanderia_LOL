import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PedidoService } from 'src/app/services/pedido.service';
import { RoupaService } from 'src/app/services/roupa.service';
import { Pedido, Roupa } from 'src/app/shared';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAceitarComponent } from '../modal-aceitar/modal-aceitar.component';

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
    private roupaService: RoupaService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.roupas = this.roupaService.listarTodos();
  }

  adicionarItem(): void {
    const roupasPedido = this.pedido?.roupas ?? [];
    let valorPedido = this.pedido?.valor ?? 0;
    if (this.roupaSelecionada && this.roupaSelecionada.precoRoupa !== undefined) {
      roupasPedido.push({
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

  abrirModalAceitar(pedido: Pedido): void {
    const modalRef = this.modalService.open(ModalAceitarComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  recusarOrcamento(): void {
    location.reload();
  }

}
