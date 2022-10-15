import styled from 'styled-components';

export const CardBoxCarros = styled.div`
  background-color: #fff;
  display: flex;
  grid-column-start: 2;
  grid-column-end: 4;
  width: 840px;
  margin-bottom: 16px;
  border-radius: 8px;
  height: 289px;
  img {
    max-width: 120px;
    max-height: 70px;

    padding-top: 16px;
    padding-left: 16px;
  }
  .cardInterno {
    margin-right: 5px;
    svg {
      color: #666;
    }
  }
  .div__conteudo {
    display: flex;
    flex-direction: column;
    width: 531px;
    height: 289px;
    border-right: 1px solid #666;
  }
  .opcoes {
    display: flex;
    align-items: center;
    margin-left: -100px;
    margin-top: 34px;
    svg {
      width: 20px;
      margin-right: 5px;
    }

    .opcoes__small {
      margin-right: 8px;
      font-size: 12px;
    }
  }
  .seguro {
    margin-top: 36px;
    margin-left: -137px;
    border-top: 1px solid #666;
    padding: 10px;
    color: #666;
  }
  .locadora {
    margin-top: 20px;
    margin-left: -100px;
  }
  .div__precos {
    width: 240px;
    margin-top: 50px;
    padding: 8px;
    .tiposdepagamento {
      color: #666;
      border-top: 1px solid #666;
      width: 210px;
    }
    .infoPrecos {
      font-size: 12px;
      color: #444;
    }
    .cifrao {
      font-size: 16px;
      color: #444;
    }
    .preco {
      font-size: 24px;
    }
    .botao {
      margin: 16px auto;
      button {
        width: 87%;
        height: 36px;
        padding: 0 16px;
        line-height: 36px;
        background-color: #4300d2;
        margin: 0 13px;
        border: none;
        border-radius: 24px;
        color: #fff;
      }
    }
  }
  .titulo {
    margin-top: 15px;
    margin-left: 8px;
    text-transform: uppercase;
    height: 0;
  }
  .passaporte {
    display: flex;
    align-items: center;
    border-top: 1px solid #666;
    p {
      font-size: 12px;
    }
    .mensagem {
      padding-top: 10px;
      padding-left: 8px;
    }
  }
`;
