export class Pedido {
  constructor(
    public idPedido?: number,
    public dataPedido?: string,
    public dataEstimativa?: string,
    public dataColeta?: string,
    public dataEntrega?: string,
    public valor?: number,
    public statusPedido?: string) {}
}

export class RoupasPedido {
  constructor(
    public idPedido?: number,
    public idRoupa?: number,
    public nomeRoupa?: string,
    public valorLavagemPeca?: number) {}
}