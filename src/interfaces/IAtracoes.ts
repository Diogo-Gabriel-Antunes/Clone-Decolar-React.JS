import { IImagens } from './IMagens';
import { IOpcoesAtracoes } from './IOpcoesAtracoes';

export default interface IAtracoes {
  id: number;
  imagem: string;
  nome: string;
  local: string;
  avaliacao: number;
  comentario: number;
  preco: number;
  createdAt: string;
  updatedAt: string;
  imagens: IImagens[];
  descricao: string;
  duracao: string;
  quantidadeDeDias: number;
  opcoes: IOpcoesAtracoes[];
}
