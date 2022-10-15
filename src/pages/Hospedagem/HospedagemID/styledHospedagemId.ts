import styled from 'styled-components';

export const BackGrounImage = styled.div<{ backGround: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 87px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) =>
    props.backGround
      ? `background-image: url(${props.backGround});`
      : `background-color: #4300d2;
`};
  .card__container {
    .card__informaçõesGerais {
      border-radius: 8px;
      width: 1118px;
      display: flex;
      height: 250px;
      background-color: #fff;
      padding: 43px;

      .estrelas {
        svg {
          color: orange;
        }
      }
      .preco {
        padding-left: 24px;
        margin-left: 24px;
        font-size: 24px;
        color: #444;
        margin-top: 50px;
        .dataRef {
          font-size: 14px;
        }
        .button__border {
          border-bottom: 1px solid #ccc;
          padding-bottom: 16px;
          width: 130%;
        }
        .formaDePagamento {
          font-size: 12px;
          color: #888;
          padding-top: 12px;
          margin-top: 12px;
        }
      }
    }
    .card__border {
      border-right: 1px solid #ccc;
      width: 50%;
      height: 100%;
    }
  }
  .titulo {
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.2px;
    font-weight: 500;
    color: #444;
    margin-top: -30px;
  }
  .localizacao {
    color: #888;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    margin-top: -15px;
  }
  .avaliacaoContainers {
    display: flex;
    margin-top: 10px;
    align-items: center;
    color: #444;
    .avaliacao {
      font-size: 34px;
      line-height: 32px;
      font-weight: 700;
      color: #fff;
      background-color: #03a691;
      width: 60px;
      height: 48px;
      border-radius: 8px;
      margin-right: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .classificacao {
      font-size: 20px;
      line-height: 1.4;
      font-weight: 600;
      margin-bottom: -15px;
    }
  }
`;

export const HospedagemIdContainer = styled.div`
  margin-bottom: 150px;

  .navbar {
    background-color: #fff;
    height: 55px;
    margin-top: -20px;
    .navbar__lista {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 20px 0;
        padding: 0 30px;
        list-style: none;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
    }
  }
  .caminho {
    margin-left: 315px;
    p {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: #4300d2;
    }
  }
  .card__servicos {
    margin-top: 50px;
    margin-left: 315px;
    width: 1280px;

    .titulo {
      color: #444;
    }

    .servicos {
      display: flex;
      align-items: center;
      color: #666;
      p {
        margin-right: 32px;
        margin-left: 8px;
      }
    }
    .sobre__container {
      display: flex;
      width: 1280px;
      margin: 100px 0px;
      border-radius: 8px;
      background-color: #fff;
      .imagem__container {
        img {
          width: 512px;
          border-radius: 8px 0px 0px 8px;
        }
      }
      .sobre__conteudo {
        margin: 24px;
        .sobre__conteudo__titulo {
          font-size: 24px;
          color: #444;
        }
      }
      .sobre__conteudo__texto {
        padding-top: 14px;
        line-height: 1.2;
        font-size: 16px;
      }
    }
    .fotos__container {
      .fotos__container__titulo {
        color: rgb(68, 68, 68);
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.2px;
        font-weight: 600;
      }
      .fotos {
        width: 1280px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
          'foto__0 foto__1 foto__2 foto__3'
          'foto__0 foto__4 foto__5 foto__6';
        img {
          width: 247px;
          height: 184px;
          border-radius: 8px;
          margin-right: 20px;
        }
        .foto__0 {
          grid-area: foto__0;
          height: 380px;
          width: 503px;
        }
      }
    }
    .quartos__container {
      .quartos__container__titulo {
        color: rgb(68, 68, 68);
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.2px;
        font-weight: 600;
      }
      .fotos {
        width: 1280px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
          'foto__0 foto__1 foto__2 foto__3'
          'foto__0 foto__4 foto__5 foto__6';
        img {
          width: 247px;
          height: 184px;
          border-radius: 8px;
          margin-right: 20px;
        }
        .foto__0 {
          grid-area: foto__0;
          height: 380px;
          width: 503px;
        }
      }
    }
    .titulo__condicoesHospedagem {
      font-size: 32px;
      color: #444;
    }
    .condicoesHospedagem {
      display: flex;
      div ul {
        padding: 0;
        li {
          list-style: none;
          display: flex;
          align-items: center;
          margin-right: 251px;
          color: #666;
          svg {
            margin-right: 8px;
          }
        }
      }
      .condicoesHospedagem__titulo {
        font-size: 20px;
        margin-bottom: 20px;
        color: #444;
      }
    }
    .higieneSeguranca {
      display: grid;
      grid-gap: 28px;
      grid-template-columns: 1fr 1fr 1fr;
      width: auto;
      height: auto;
      div ul {
        padding-left: 22px;
        height: 80px;
        width: 367px;
        li {
          font-size: 16px;
          color: #666;
          height: 24px;
          font-family: Rubik, Arial, sans-serif;
        }
      }
    }
    .reserva {
      margin-top: 80px;
      display: flex;
      .pagamento__container {
        color: #444;
        p {
          padding: 0;
          margin: 0;
        }
        margin-top: 72px;
        margin-left: 8px;
        padding: 16px;
        width: 250px;
        height: 509px;
        .pagamento__containerQtdNoites {
          font-size: 12px;
        }
        .pagamento__container__valor {
          display: flex;
          margin-top: 4px;
          align-items: center;
          .pagamento__container__cifrao {
            font-size: 16px;
            padding-top: 6px;
          }
          .pagamento__container__preco {
            font-size: 24px;
          }
        }
        .pagamento__container__impostos {
          font-size: 12px;
          color: #888;
          margin-top: 4px;
          margin-bottom: 20px;
        }
        .pagamento__container__button {
          border-bottom: 1px solid #ccc;
          padding-bottom: 16px;
          width: 100%;
        }
        .formaDePagamento__container {
          border-bottom: 1px solid #ccc;
          padding-bottom: 16px;
          .formaDePagamento {
            margin-top: 16px;
            display: flex;
            align-items: center;
            p {
              font-size: 14px;
              color: #444;
              width: 180px;
            }
            svg {
              padding-bottom: 6px;
              margin-right: 8px;
              color: #4300d2;
            }
          }
          .formaDePagamento__descricao {
            font-size: 12px;
            color: #666;
            margin-top: 12px;
          }
        }
        .infosReserva__Container {
          color: #444;
          h5 {
            font-size: 16px;
          }
          div {
            margin-top: 16px;
            font-size: 14px;
            display: flex;
            align-items: center;
            svg {
              width: 16px;
              color: green;
              margin-right: 6px;
            }
            .infosReserva__naocontem {
              color: red;
              padding-bottom: 20px;
            }
          }
        }
      }
    }
  }
`;
