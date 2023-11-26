import { Component } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/shared';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent {

  constructor (private pedidoService: PedidoService) { }

  listarPedidos(): Pedido[] {
    return this.pedidoService.listarTodos();
  }
  
  formatarData(data: Date): string {
    const dataObj = new Date(data);
  
    if (isNaN(dataObj.getTime())) {
      return 'Data inválida';
    }
  
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); 
    const ano = String(dataObj.getFullYear());
    const hora = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');
  
    return `${dia}-${mes}-${ano} ${hora}:${minutos}`;
  }

}
