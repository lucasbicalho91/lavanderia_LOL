import { Component } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/shared';

@Component({
  selector: 'app-visualizacao-pedidos-funcionario',
  templateUrl: './visualizacao-pedidos-funcionario.component.html',
  styleUrls: ['./visualizacao-pedidos-funcionario.component.css']

})
export class VisualizacaoPedidosFuncionarioComponent {

  statusSelecionado: string = '';
  
  constructor (
    private pedidoService: PedidoService) { }

  listarPedidos(): Pedido[] {
    return this.pedidoService.listarTodos();
  }

  getStatusClass(statusPedido: string | undefined): string {
    switch (statusPedido) {
        case 'Em Aberto':
            return 'bg-warning';
        case 'Cancelado':
            return 'text-white bg-danger';
        case 'Recolhido':
            return 'text-white bg-secondary';
        case 'Aguardando Pagamento':
            return 'text-white bg-primary';
        case 'Pago':
            return 'bg-orange';
        case 'Finalizado':
            return 'text-white bg-success';
        default:
            return '';
    }
}

getBotaoTexto(statusPedido: string | undefined): string {
  switch (statusPedido) {
      case 'Em Aberto':
          return 'Confirmar Recolhimento';
      case 'Recolhido':
          return 'Confirmar Lavagem';
      case 'Pago':
          return 'Finalizar Pedido';
      default:
          return '';
  }
}

mostrarBotao(statusPedido: string | undefined): boolean {
  const statusComBotao = ['Em Aberto', 'Recolhido', 'Pago'];
    return statusPedido !== undefined && statusComBotao.includes(statusPedido);
}

efetuarAcao(nomeFuncao: string, pedido: any): void {
  switch (nomeFuncao) {
      case 'Confirmar Recolhimento':
          this.confirmarRecolhimento(pedido);
          break;
      case 'Confirmar Lavagem':
          this.confirmarLavagem(pedido);
          break;
      case 'Finalizar Pedido':
          this.finalizarPedido(pedido);
          break;
  }
}

confirmarRecolhimento(pedido: any): void {
  pedido.statusPedido = "Recolhido";
}

confirmarLavagem(pedido: any): void {
  pedido.statusPedido = "Aguardando Pagamento";
}

finalizarPedido(pedido: any): void {
  pedido.statusPedido = "Finalizado";
}

ordenarPedidos(): Pedido[] {
  const pedidosOrdenados = this.listarPedidos().slice();
  pedidosOrdenados.sort((a, b) => {
    const dataA = a.dataPedido ? new Date(a.dataPedido).getTime() : 0;
    const dataB = b.dataPedido ? new Date(b.dataPedido).getTime() : 0;
    return dataA - dataB;
  });
  return pedidosOrdenados;
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
