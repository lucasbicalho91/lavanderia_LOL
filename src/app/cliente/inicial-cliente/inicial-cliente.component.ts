import { Component } from '@angular/core';
import { Pedido } from 'src/app/shared';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent {

  pedido : Pedido | null = null;

  pedidos : Pedido [] = [
    {
      idPedido : 123, dataPedido : new Date ('2023-05-01'), dataEstimativa : new Date ('2023-05-01'), dataColeta : new Date ('2023-05-01'), dataEntrega : new Date ('2023-05-01'), valor : 55.51, statusPedido : 'em andamento'
  }
];

}
