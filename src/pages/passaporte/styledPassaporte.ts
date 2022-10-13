import styled from 'styled-components';

export const PassaporteBox = styled.div`
  max-width: 844px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 24px;
  .passaporte__image {
    position: absolute;
    width: 100%;
    left: 0;
    height: 266px;
    overflow: hidden;
    background-color: #ff7a80;
    img {
      position: relative;
      padding-top: 50px;
      float: right;
    }
  }
  .passaporte__container {
    margin-right: 0;
    margin-left: 0;
    position: relative;
    padding: 66px 0 30px 0;
    .passaporte__container__title {
      display: inline-block;
      vertical-align: top;
      padding-left: 24px;
      h1 {
        font-size: 2em;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: 500;
        color: #fff;
      }
      .titulo__meuPassaporte {
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -0.2px;
      }
      .titulo__nome {
        font-size: 14px;
        letter-spacing: 0.1px;
        line-height: 20px;
        padding-top: 4px;
      }
    }
    .infos__container {
      display: flex;
      background-color: #fff;
      border-radius: 8px;
      min-height: 221px;
      padding: 0 10px 25px 10px;
      margin: 0 -12px;
      margin-top: 32px;
      box-shadow: 0 12px 20px rgb(68 68 68 /20%);
      .infos {
        display: block;
        float: left;
        box-sizing: border-box;
        min-height: 1px;
        padding: 0 12px;
        width: 33.33%;
        padding-top: 32px;
        .infos__categoria {
          font-size: 14px;
          letter-spacing: 0.1px;
          line-height: 20px;
          font-weight: bold;
          color: #ff5c63;
        }
        .infos__passaporte {
          font-size: 32px;
          line-height: 36px;
          letter-spacing: -0.2px;
          font-weight: bold;
          color: #ff5c63;
          margin: 0;
        }
      }
      .card__container {
        display: flex;
        .card__pontos {
          margin-left: 16px;
          padding-top: 32px;
          img {
            width: 28px;
          }
          h1 {
            color: #444;
            font-size: 14px;
            letter-spacing: 0.1px;
            line-height: 20px;
            font-weight: bold;
          }
          .pontosdisponiveis {
            border: 1px solid #ccc;
            text-align: center;
            margin-top: 4px;
            width: 240px;
            height: 58px;
            border-radius: 10px;
            div {
              margin-top: 10px;
              span {
                font-size: 32px;
              }
            }
          }
          .pontospendentes {
            border: 1px solid #ccc;
            text-align: center;
            margin-top: 4px;
            width: 240px;
            height: 58px;
            border-radius: 10px;
            div {
              margin-top: 10px;
              span {
                font-size: 32px;
              }
            }
          }
        }
      }
    }
    .detalhes__creditCard {
      display: flex;
      font-size: 12px;
      letter-spacing: 0.1px;
      line-height: 16px;
      color: #666;
    }
    .infos__creditCard {
      padding-left: 20px;
      margin-top: 24px;
      display: flex;
      align-items: center;
      max-width: 844px;
      background-image: linear-gradient(to right, #2c2da5, #6466f0 99%);
      border-radius: 8px;
      .creditCard {
        background-image: url(//media.staticontent.com/media/pictures/82c71710-860c-41c6-ab79-7cd49595b016);
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
        border-radius: 8px;
        width: 844px;
        height: 196px;
        padding-left: 4px !important;
        padding-bottom: 24px !important;
        .creditCard__h3 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 550;
          margin-top: 20px;
          color: #fff;
        }
        .creditCard__h4 {
          font-size: 20px;
          line-height: 28px;
          font-weight: 600;
          margin-top: 4px;
          color: #fff;
          width: 478.328px;
        }
      }
      .botaoPejaOSeu {
        margin-top: 36px;
        font-size: 14px;
        background-color: #fff;
        border: none;
        color: #444;
        border-radius: 24px;
        padding: 0px 16px;
        line-height: 36px;
        font-weight: 600;
        transition: background-color 0.3s ease-out;
        cursor: pointer;
        &:hover {
          background-color: #bbb;
        }
      }
    }
    .recomendacoes {
      max-width: 844px;
      margin-bottom: 30px;
      box-sizing: content-box;
      margin: 0 auto;
      margin-top: 56px;
      padding: 0 24px;
      h2 {
        font-size: 32px;
        line-height: 36px;
        color: #444;
      }
    }
    .carrossel__container {
      position: relative;
      max-width: 1280px;
      scroll-behavior: smooth;
      height: 500px;
      .carrossel__wrapper {
        overflow-x: auto;
        scroll-behavior: smooth;
        height: 500px;
        &::-webkit-scrollbar {
          display: none;
        }
        .carrossel {
          display: flex;
          flex-flow: row nowrap;
          .card {
            margin-right: 32px;
            .card__container {
              height: 440px;
              .card__border {
                border-bottom: 1px solid #888;
                height: 350px;
                .card__conteudo {
                  padding-top: 24px;
                  padding-left: 20px;
                  padding-right: 20px;
                  .card__conteudo__tipo {
                    margin: 0;
                    font-size: 12px;
                    color: #888;
                    text-transform: uppercase;
                    font-weight: 600;
                  }
                  .card__conteudo__titulo {
                    margin: 0;
                    font-size: 24px;
                    padding-bottom: 8px;
                    padding-top: 8px;
                    font-weight: 600;
                  }
                  .card__conteudo__infos {
                    font-size: 12px;
                    margin: 0;
                    color: #888;
                    font-weight: 600;
                  }
                }
              }
              .card__imagem {
                img {
                  border-radius: 8px 8px 0px 0px;
                }
              }
              .card__preco {
                padding-left: 20px;
                padding-right: 20px;

                .card__preco__infos {
                  color: #666;
                  font-size: 12px;
                  margin: 0;
                  margin-top: 12px;
                }
                .card__preco__pontos {
                  display: flex;
                  align-items: center;
                }
                .card__preco__pontos__p {
                  font-size: 20px;
                  font-weight: 600;
                  color: #444;
                  margin-left: 8px;
                }
                .pontos {
                  padding-bottom: 6px;
                  padding-left: 6px;
                }
              }
            }
          }
          .button__left {
            position: absolute;
            top: 50%;
            border-radius: 24px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            width: 48px;
            height: 48px;
            background-color: #fff;
            border: 1px solid #ccc;
            svg {
              margin: 0 10px;
              color: #666;
            }
          }
          .button__right {
            position: absolute;
            top: 50%;
            left: 93%;
            border-radius: 24px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            width: 48px;
            height: 48px;
            background-color: #fff;
            border: 1px solid #ccc;
            svg {
              margin: 0 5px;
              color: #666;
            }
          }
        }
      }
    }
  }
`;
