export interface IQuartos {
  id: number;
  nome: string;
  imagem: string;
  hidromassagem: boolean;
  tv: boolean;
  wifi: boolean;
  arCondicionado: boolean;
  frigobar: boolean;
  preco: number;
  quartosHospedagemId?: number;
  quartoAlugueisCasaId?: number;
  createdAt: string;
  updatedAt: string;
  AreaDoQuarto: number;
}
