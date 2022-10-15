import styled from 'styled-components';

export const CardReservaHospedagemBox = styled.div`
  height: 566px;
  display: flex;
  .ColumnInfos {
    width: 259px;
    height: 399px;
    border-right: 2px solid #4300d2;
    border-left: 2px solid #4300d2;
    img {
      width: 100%;
    }
    .ColumnInfos__interno {
      padding: 12px;
      .ColumnInfos__interno__nome {
        font-size: 14px;
        line-height: 1.3;
        font-weight: 500;
      }
      .ColumnInfos__interno__options {
        margin: 0;
        padding: 0;

        font-size: 12px;
        color: #666;
        display: flex;
        p {
          margin: 0px;
          padding: 0;
        }
        align-items: center;
        svg {
          width: 14px;
          margin-right: 8px;
        }
      }
      .ColumnInfos__interno__ajuste {
        margin-top: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  .ColumnOpcoes__infosQuartosContainer {
    display: flex;
    border-bottom: 1px solid #ccc;
    .ColumnOpcoes {
      padding: 40px 16px;
      width: 126px;
      height: 33.33333%;
      display: flex;
      .ColumnOpcoes__infosQuartos {
        font-size: 12px;
        color: #444;
        p {
          padding: 0;
          margin: 0;
        }
        svg {
          margin-right: 8px;
          width: 16px;
          height: 12px;
        }
        .ColumnOpcoes__infosQuartosQTDPessoas {
          display: flex;
          align-items: center;
        }
        .ColumnOpcoes__infosQuartosCama {
          margin-top: 24px;
          p {
          }
        }
      }
    }
    .ListaDeOpcoes {
      width: 236px;
      height: 198px;
      display: flex;
      align-items: center;
      .ListaDeOpcoes__FormaDePagamento {
        background-color: #eee;
        padding: 0 6px;
        height: 24px;
        border-radius: 6px;
        margin-bottom: 8px;
      }
      ul {
        margin: auto 0;
        list-style: none;
        padding: 0;

        li {
          font-size: 14px;
          color: #444;
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          padding: 0 8px;
          width: 220px;
        }
        svg {
          width: 16px;
          margin-right: 8px;
        }
        .ajustesSvg {
          margin-top: -36px;
        }
      }
    }
    .ColumnOpcoes__infosQuartosPrecoContainer {
      height: 198px;
      display: flex;
      flex-direction: column;
      color: #444;
      align-items: center;
      .ColumnOpcoes__infosQuartosPrecoContainerAjuste {
        margin: auto 32px;
        p {
          padding: 0;
          margin: 0;
        }
        .ColumnOpcoes__infosQuartosPreco {
          display: flex;
          color: #444;
          align-items: center;
          height: 30px;
          .ColumnOpcoes__infosQuartosPreco__cifrao {
            font-size: 16px;
            padding-top: 4px;
            margin-right: 4px;
          }
          .ColumnOpcoes__infosQuartosPreco__valor {
            font-size: 24px;
          }
        }
        .ColumnOpcoes__infosQuartosPreco__impostos {
          font-size: 12px;
          color: #888;
        }
      }
    }
    .inputSelecionar {
      height: 198px;
      margin: 0 auto;
      width: 220px;
      display: flex;
      align-items: center;
      div {
        margin: 0 auto;
      }
      input {
        display: block;
        margin: 0 auto;
        width: 20px;
        height: 20px;
      }
      label {
        display: flex;
        margin: 0 auto;
        color: #444;
        margin-top: 8px;
      }
    }
  }
`;
