import { Card } from '@mui/material';
import styled from 'styled-components';

export const CardBox = styled(Card)`
  border-radius: 0px 99px 0px 0px;
  display: flex;
  margin-bottom: 20px;
  background-color: #fff;
  width: 1265px;
  .div__conteudo {
    border-right: 0.0000000001px solid #666666;
    padding-right: 16px;
  }
  .sobre {
    font-size: 14px;
    margin-left: 15px;
    width: 636px;
    margin-bottom: 32px;
    color: #666;
  }
  img {
    width: 300px;
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
    margin: 4px 15px;
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
  .div__precos {
    margin: 16px;
    .infoPrecos {
      font-weight: 400;
      font-size: 12px;
      display: block;
    }
    .tiposdepagamento {
      height: 12px;
      margin-top: 10px;
      p {
        font-size: 12px;
      }
    }
  }
  .preco__container {
    margin-top: 8px;
    .cifrao {
      font-size: 13px;
      color: #444;
    }
    .preco {
      font-size: 28px;
      color: #444;
    }
  }
  .botao {
    margin: 16px 4px;
    .link {
      text-decoration: none;

      button {
        height: 36px;
        padding: 0px 16px;
        border-radius: 64px;
        border: none;
        background-color: #3400d2;
        color: #fff;
        line-height: 36px;
        font-size: 14px;
      }
    }
  }
  .passaporte {
    display: flex;
    margin-top: 63px;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    padding-left: 8px;
    width: 289px;
    margin-left: -17px;
    img {
      width: 18px;
    }
    .mensagem {
      margin-left: 8px;
    }
    .passaportedecolar {
      margin-top: 8px;
    }
    p {
      margin-top: -7px;
      font-size: 12px;
    }
  }
`;
