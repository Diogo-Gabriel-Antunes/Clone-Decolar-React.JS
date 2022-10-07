import styled from "styled-components";

export const CardAtracoesBox = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 315px;
  gap: 16px;
  width: 410px;
  border-radius: 8px;
  img {
    border-radius: 8px 8px 0px 0px;
  }
  h2 {
    font-size: 24px;
    color: #444;
  }
  .conteudo__container {
    margin-top: -3.9px;
    padding: 8px;
    border: 0.001px solid #666;
    .conteudo__segundoContainer {
      display: flex;
      margin-top: -16px;
      align-items: center;

      .conteudo__avaliacao {
        background-color: #444;
        color: #fff;
        font-size: 12px;
        padding: 2px 4px;
        border-radius: 4px;
      }
      .conteudo__avaliacaoTexto {
        font-size: 14px;
        color: #03a691;
        font-weight: 700;
        margin-left: 8px;
      }
      .conteudo__comentarios {
        font-size: 14px;
        color: #444;
        display: flex;
        align-items: center;
        letter-spacing: 0.05px;
        margin-left: 8px;
      }
    }
  }
  .conteudo__preco {
    color: #444;
    padding: 8px;
    border: 1px solid #444;

    border-top: 0px;
    div {
      margin-top: -15px;
      p {
        font-size: 12px;
        line-height: 16px;
      }
      .preco__cifrao {
        font-size: 13px;
        margin-left: 8px;
      }
      .preco__valor {
        font-size: 20px;
        padding-bottom: 6px;
        margin-left: 4px;
      }
      .conteudo__precoInterno {
        display: flex;
        align-items: center;
      }
    }
  }
  .passe__decolar {
    display: flex;
    align-items: center;
    padding: 8px;
    border: 1px solid #444;
    border-top: 0px;
    img {
      width: 18px;
      height: 24px;
    }
    p {
      font-size: 12px;
      margin-left: 8px;
      color: #444;
    }
  }
  .metodoDePagamento {
    border-radius: 0px 0px 4px 4px;
    padding: 8px;
    display: flex;
    align-items: center;
    border: 1px solid #444;
    border-top: 0px;
    svg {
      width: 16px;
    }
    p {
      font-size: 12px;
      color: #444;
      margin-left: 8px;
    }
  }
`;
