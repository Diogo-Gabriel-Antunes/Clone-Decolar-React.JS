export interface IMinhasViagens {
  id: number;
  imagem: string;
  local: string;
  nome: string;
  avaliacao: number;
  comentario: number;
  preco: number;
  createdAt: string;
  updatedAt: string;
  alugueisCarrosId: any;
  alugueisCasaId: any;
  atracaoId: number;
  hospedagemId: any;
  viagensId: any;
  usuarioId: number;
  dataInicio: string;
  dataFinal: string;
  imagens: string[];
}
