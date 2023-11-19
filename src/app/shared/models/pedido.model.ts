export class Pedido {
  constructor(
    public idPedido?: number,
    public dataPedido?: Date,
    public dataEstimativa?: Date,
    public dataColeta?: Date,
    public dataEntrega?: Date,
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