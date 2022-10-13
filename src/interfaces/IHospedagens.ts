import { IMinhasViagens } from './IMinhasViagens';
import { IQuartos } from './IQuartos';

export default interface IHospedagem {
  id: number;
  nome: string;
  tipo: string;
  distanciadocentro: number;
  avaliacao: number;
  preco: number;
  sobre: string;
  imagem: string;
  createdAt: string;
  updatedAt: string;
  imagens: IMinhasViagens[];
  localizacao: string;
  comentarios: number;
  dataRef: string;
  quartos: IQuartos[];
}
