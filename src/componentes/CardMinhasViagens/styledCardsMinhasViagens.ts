import styled from 'styled-components';

import { CardPassagensBox } from '../CardPassagens/styledCardPassagens';

export const HoteisMinhasViagensBox = styled.div`
  width: 830px;
  display: flex;
  .img__alugueisCasa {
    width: 195px;
    height: 230px;
  }
`;

export const CardMinhasViagensComponent = styled(CardPassagensBox)`
  padding: 0;
  width: 1000px;
  height: 200px;
  .container__grid {
    .img__alugueisCasa {
      min-width: 250px;
      width: 250px;
      height: 200px;
      margin-right: 16px;
    }
  }
  .div__conteudo {
    .titulo {
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
      margin-top: 16px;
      color: #444;
    }
    .distanciadocentro {
      font-size: 14px;
      letter-spacing: 0.05px;
      line-height: 20px;
      margin-top: -16px;
      color: #666;
    }
    .cardInterno {
      margin: 4px 0px;
      display: flex;
      align-items: center;
      .avaliacao {
        font-size: 12px;
        width: 18px;
        line-height: 16px;
        font-weight: 400;
        margin-right: 4px;
        padding: 2px 4px;
        background-color: #03a691;
        color: #fff;
        border-radius: 3px;
      }
      svg {
        width: 16px;
        color: orange;
      }
    }
    .sobre {
      font-size: 14px;
      letter-spacing: 0.05px;
      line-height: 20px;
      margin-top: 8px;
      color: #666;
    }
  }
  .companhia {
    padding: 32px;
    display: flex;
    .origem {
      margin-left: 64px;
    }
    .container__grid {
      height: 100%;
    }
  }
  .atracao {
    display: flex;
  }
`;

export const MinhasViagensCarroBox = styled.div`
  display: flex;
  height: 200px;
  .imagemFotoDoCarro {
    min-width: 250px;
    width: 250px;
    height: 200px;
    margin-right: 16px;
  }
  .div__conteudo {
    display: flex;
    flex-direction: column;
    width: 531px;
    height: 200px;
  }
  .opcoes {
    display: flex;
    align-items: center;
    margin-left: 0px;
    margin-top: -40px;
    svg {
      width: 20px;
      margin-right: 5px;
    }

    .opcoes__small {
      margin-right: 8px;
      font-size: 12px;
    }
  }
`;

export const MinhasViagensHospedagemBox = styled.div`
  display: flex;
  .fotoHospedagem {
    min-width: 250px;
    width: 250px;
    height: 200px;
    margin-right: 16px;
  }
  .div__conteudo {
    padding-right: 16px;
    height: 200px;
    .sobre {
      font-size: 14px;
      margin-left: 15px;
      width: 500px;
      margin-bottom: 32px;
      color: #666;
    }

    .titulo {
      margin-top: 8px;
      margin-left: 15px;
      font-size: 24px;
    }
    .distanciadocentro {
      margin: 0 15px;
      font-size: 14px;
    }
    .cardInterno {
      font-size: 14px;
      margin: 4px 20px;
      display: flex;
      align-items: center;
      p {
        margin-right: 4px;
        font-size: 14px;
        padding: 2px 4px;
        background-color: #444;
        color: #fff;
        border-radius: 3px;
      }
      svg {
        width: 16px;
        color: orange;
      }
    }
  }
`;
