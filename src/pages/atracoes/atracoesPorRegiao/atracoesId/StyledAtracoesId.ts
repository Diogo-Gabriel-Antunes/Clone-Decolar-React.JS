import styled from 'styled-components';

export const AtracoesIdBox = styled.div`
  width: 1280px;
  margin: 0 auto;
  .caminho {
    padding: 24px 25px;
    margin: 0 auto;
    background-color: #fff;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    p {
      color: #4300d2;
      margin: 0;
      display: flex;
      align-items: center;
    }
  }
  .galeria {
    display: grid;
    grid-template-columns: 815px 232.5px 232.5px;
    grid-template-areas:
      'foto_1 foto_2 foto_2'
      'foto_1 foto_3 foto_4';
    .foto__0 {
      grid-area: foto_1;
      width: 100%;
      height: 100%;
    }
    .foto__1 {
      grid-area: foto_2;
      width: 100%;
      height: 100%;
    }
    .foto__2 {
      grid-area: foto_3;
      width: 100%;
      height: 100%;
    }
    .foto__3 {
      grid-area: foto_4;
      width: 100%;
      height: 100%;
    }
  }
  .infosAtracao {
    background-color: #fff;
    padding: 50px 25px;
    display: flex;
    margin-bottom: 50px;
    .infos {
      .infos__titulo {
        padding: 0;
        margin: 0;
        font-size: 32px;
        color: #444;
        width: 830px;
      }
      .infos__paragrafo {
        color: #444;
        display: flex;
        align-items: center;
        font-size: 14px;
        svg {
          width: 20px;
          margin-right: 8px;
        }
      }
    }
    .beneficios__container {
      display: flex;
      .beneficios {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #888;
        width: 70px;
        margin-right: 10px;
        cursor: pointer;
        margin-top: 35px;
        p {
          font-size: 12px;
          padding-top: 5px;
          text-align: center;
          line-height: normal;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        svg {
          width: 30px;
        }
      }
    }
    .preco__container {
      color: #444;
      position: relative;
      .preco__box {
        background-color: #fff;
        position: absolute;
        width: 296px;
        height: 202px;
        border-radius: 6px;
        top: -122px;
        border: 1px solid #ccc;
        padding: 12px 20px;
        p {
          font-size: 12px;
        }
        .preco__box__display {
          display: flex;
          align-items: center;
          height: 21px;
          p {
            margin: 0;
          }
          .preco__box__valor {
            font-size: 20px;
          }
          .preco__box__cifrao {
            padding-top: 4px;
          }
        }
      }
      .preco__box__display__pontos {
        display: flex;
        align-items: center;
        padding: 8px 0px;
        img {
          margin-right: 8px;
        }
      }
      .preco__border {
        border-bottom: 1px solid #ccc;
        height: 150px;
        width: 336px;
        margin-left: -20px;
        .preco__ajuste {
          margin-left: 20px;
        }
      }
    }
  }
  .descricao {
    background-color: #fff;
    padding: 40px 25px;
    display: flex;
    margin-bottom: 50px;
    .descricao__container {
      color: #444;
      position: relative;
    }
  }
`;

export const AtracaoOpcoesBox = styled.div`
  background-color: #fff;
  padding: 65px 210px 50px 145px;
  display: flex;
  margin-bottom: 50px;
  .opcoes__container {
    color: #444;
    position: relative;
    h2 {
      margin-bottom: 64px;
    }

    .opcoes__card {
      border: 1px solid #ccc;
      border-radius: 8px;
      display: flex;
      width: 925px;
      margin-bottom: 26px;
      .opcoes__card__containerFirst {
        padding: 17px;
        width: 679px;
        h4 {
          font-size: 16px;
          color: #444;
          margin: 0;
        }
        p {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 0;
          padding: 0;
          display: inline-flex;
          margin-left: 16px;
          color: #888;
        }
        .opcoes__card__duracaoBox {
          display: flex;
          margin-bottom: 16px;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
          .opcoes__card__duracao {
            color: #444;
            margin: 0;
            padding: 0;
            svg {
              width: 14px;
              margin-right: 8px;
            }
          }
        }
        .opcoes__card__inclui {
          border-bottom: 1px solid #eee;
          p {
            font-size: 14px;
            color: #666;
          }
          ul {
            list-style: none;
            width: 300px;
            padding: 0px 0px 0px 20px;
            li {
              padding: 0;
              font-size: 14px;
              font-weight: 500;
              padding-left: 5px;
              padding-right: 11px;
              svg {
                color: #00b02e;
              }
            }
          }
        }
        .opcoes__card__form {
          display: flex;
          padding-top: 16px;
          .box__form {
            display: flex;
            flex-direction: column;
            margin-right: 16px;
            label {
              color: #444;
              font-size: 12px;
              font-weight: 500;
              margin-bottom: 10px;
              text-transform: uppercase;
            }
            input {
              height: 36px;

              box-sizing: border-box;
              -webkit-appearance: none;
              appearance: none;
              width: 100%;
              border-width: 1px;
              border-style: solid;
              border-color: #ccc;
              box-shadow: none;
              background-color: #fff;
              color: #444;
              transition: border-color 0.3s ease-out;
              cursor: pointer;
              border-radius: 6px;
            }
            .input__Data {
              padding: 0 16px;
              width: 150px;
            }
            .input__Horario {
              width: 100px;
              padding: 0 12px;
            }
            .input__Pessoas {
              width: 152px;
              padding: 0 12px;
            }
          }
        }
      }
      .opcoes__card__containerSecond {
        border-left: 1px solid #ccc;
        color: #444;
        .opcoes__card__border {
          padding: 20px 18px;
          width: 84%;
          height: 217px;
          border-bottom: 1px solid #ccc;
          .opcoes__card__paragrafo {
            line-height: 1;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: -0.1px;
          }
          .opcoes__card__preco {
            display: flex;
            align-items: center;
            height: 60px;
            .opcoes__card__preco__cifrao {
              font-size: 13px;
              padding-top: 8px;
              margin-right: 8px;
            }
            .opcoes__card__preco__valor {
              font-size: 28px;
            }
          }
        }
        .opcoes__card__pontos {
          display: flex;
          align-items: center;
          padding: 8px 20px;
          img {
            width: 18px;
            height: 24px;
            margin-right: 8px;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const AtracaoSaberAntesDeComprarBox = styled(AtracaoOpcoesBox)`
  .SaberAntesDeComprar__container {
    .SaberAntesDeComprar__display {
      display: flex;
      padding-top: 32px;
      flex-direction: row;

      border-bottom: 1px solid #ccc;
      padding-bottom: 32px;
      .SaberAntesDeComprar__displayLista {
        display: flex;
        width: 512px;
        flex-direction: column;
        .SaberAntesDeComprar__lista {
          list-style: none;
          margin: 0;
          padding: 0;
          padding-top: 32px;
          li {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #888;
            padding-top: 15px;
            svg {
              width: 16px;
            }
            .check {
              color: #00b02e;
            }
          }
        }
        h6 {
          font-size: 20px;
          color: #444;
          margin: 0;
          padding: 0;
        }
      }
      .SaberAntesDeComprar__Politica__title {
        margin: 0;
        padding: 0;
        color: #444;
        font-size: 20px;
        min-width: 279px;
        padding-right: 90px;
        line-height: 1.3;
      }
      p {
        color: #888;
        font-size: 13px;
        line-height: 1.38;
      }
    }
    .center {
      align-items: center;
    }
  }
`;
