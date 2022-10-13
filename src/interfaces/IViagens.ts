export interface IViagens {
  id: number;
  companhia: string;
  destino: string;
  data: string;
  preco: number;
  imagemCompanhia: string;
  origem: string;
  volta: boolean;
  dataVolta: string;
  HorarioDaIda: string;
  HorarioDaVolta: string;
  createdAt: string;
  updatedAt: string;
  imagens: string[];
}
