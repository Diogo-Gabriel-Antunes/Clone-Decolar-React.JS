import { IMinhasViagens } from './IMinhasViagens';

import { IQuartos } from './IQuartos';

export default interface ICasaAlugueis {
  id: number;
  nome: string;
  distanciadocentro: number;
  avaliacao: number;
  sobre: string;
  preco: number;
  imagem: string;
  createdAt: string;
  updatedAt: string;
  imagens: IMinhasViagens[];
  destino: string;
  quartos: IQuartos[];
}
