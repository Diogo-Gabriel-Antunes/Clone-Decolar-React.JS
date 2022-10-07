export interface IPassagens {
  id: number;
  companhia: string;
  destino: string;
  data: string;
  preco: number;
  origem: string;
  volta: boolean;
  dataVolta: string;
  createdAt: string;
  updatedAt: string;
  imagemCompanhia: string;
  cidadeDaVolta: string;
  HorarioDaIda: string;
  HorarioDaVolta: string;
}
