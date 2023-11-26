import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-modal-cancelar',
  templateUrl: './modal-cancelar.component.html',
  styleUrls: ['./modal-cancelar.component.css']
})
export class ModalCancelarComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal,
    private pedidoService: PedidoService,) {}

atualizarCancelar(pedido: Pedido): void {
      pedido.statusPedido = "Cancelado";
      this.pedidoService.atualizar(this.pedido);
      this.activeModal.close();
  }
}
