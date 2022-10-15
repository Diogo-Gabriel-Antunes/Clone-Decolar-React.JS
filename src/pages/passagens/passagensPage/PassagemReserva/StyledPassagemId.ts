import styled from 'styled-components';

export const PassagemIdBox = styled.div`
  .container {
    display: flex;
    margin-left: 315px;
    margin-top: 16px;

    .container__titulo {
      a {
        margin-top: 4px;
        color: #4300d2;
        font-weight: 500;
        transition: color 0.2s ease-out, opacity 0.2s;
        text-decoration: none;
        cursor: pointer;
      }
      h1 {
        margin-top: 8px;
        margin-bottom: 24px;
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        line-height: 1;
        letter-spacing: -0.5px;
        color: #444;
      }
    }
    .card {
      background-color: #fff;
      margin-top: 20px;
      padding: 20px 30px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 8px;
      width: 846px;
      color: #444;
      h2 {
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.5px;
      }
      .form {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #ccc;
        padding-bottom: 24px;
        label {
          display: inline-block;
          color: #444;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1pt;
          margin-top: 20px;
        }
        input {
          border-radius: 4px;
          width: 435px;
          height: 35px;
          font-size: 13px;
          padding: 0 10px;
          box-sizing: border-box;
          border-width: 1px;
          border-style: solid;
          border-color: #ccc;
          box-shadow: none;
          color: #444;
          transition: border-color 0.3s ease-out;
          -webkit-appearance: none;
          -o-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        .form__documento {
          display: flex;
          flex-direction: column;
        }
        div {
          display: flex;
          .documento {
            width: 100px;
          }
          .documento__numero {
            margin-left: 32px;
            width: 244px;
          }
        }
      }
      p {
        margin-top: 16px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.05px;
        color: #444;
      }
      .formPagamento {
        margin-top: 16px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 16px;
        display: flex;
        align-items: center;
        label {
          margin-left: 8px;
          font-size: 12px;
          color: #444;
        }
        input {
          width: 20px;
          height: 20px;
        }
      }
      .ConfirmInfos {
        color: #444;
        font-size: 14px;
        .ConfirmInfos__dataTitle {
          display: flex;
          align-items: center;

          h5 {
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
          }
          svg {
            width: 20px;
            margin-right: 8px;
          }
        }
        .DataInfos {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #ccc;
          padding-bottom: 16px;
          margin-bottom: 16px;
          span {
            margin: 0;
            padding: 0;
            font-size: 14px;
            letter-spacing: 0.1px;
            line-height: 20px;
            font-weight: 500;
          }
        }
      }
    }
    .detalheDoPagamentoContainer {
      h3 {
        margin: 0;
        padding: 0;
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #888;
      }
      .detalheDoPagamento__Ida {
        margin-top: 32px;
        margin-bottom: 32px;
        p {
          color: #666;
          strong {
            color: #444;
          }
        }
        .detalheDoPagamento__companhia {
          display: flex;
          align-items: center;
          margin-top: 16px;
          img {
            width: 100px;
          }
        }
        .detalheDoPagamento__horarios {
          margin-top: 22px;
          display: flex;
          justify-content: space-between;
          p {
            font-size: 16px;
          }
        }
      }
      .PoliticaDeCancelamento {
        h3 {
          font-size: 16px;
        }
        .alteraçõesECancelamento {
          margin-top: 16px;
          p {
            margin-top: 8px;
            display: flex;
            align-items: center;
          }
        }
        .PoliticaDeCancelamento__termos {
          padding: 8px;
          font-size: 12px;
        }
      }
    }
    .formularioDosUsuarios {
      width: 900px;
    }
  }
  .condicoesDeCompra {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #444;
    padding: 8px 16px;
    input {
      width: 20px;
      height: 20px;
    }
  }
  .botoesDeFinalizar {
    display: flex;

    margin: 32px 140px;
  }
  .DetalheDoPagamento {
    margin-top: 20px;
    .card {
      width: 435px;
      justify-content: flex-start;
      padding: 12px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgb(68 68 68 / 20%);
      background-color: #fff;
      .preco__display {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 14px;
          color: #444;
        }
      }
      .card__border {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;
