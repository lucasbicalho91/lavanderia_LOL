import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared';
import { PedidoService } from 'src/app/services/pedido.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css']
})
export class ModalPedidoComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal,
    private pedidoService: PedidoService) {}

    atualizarPagamento(pedido: Pedido): void {
      pedido.statusPedido = "Pago";
      this.pedidoService.atualizar(this.pedido);
      this.activeModal.close();
    }
  }
