import styled from 'styled-components';
import { PassagensBox } from '../passagens/passagensPage/passagensPagestyled';

export const MinhasViagensBox = styled.div`
  .bgWhite {
    background-color: #fff;
    height: 210px;

    border-bottom: 1px solid #ccc;
    .div__titulo {
      border-top: 1px solid #ccc;
      width: 100vw;
      box-sizing: content-box;

      max-width: 1280px;
      padding: 0 24px;
      margin-left: 315px;
      .titulo {
        color: #444;
        font-size: 32px;
        font-weight: 600;
        letter-spacing: -0.2px;
        line-height: 36px;
        padding-bottom: 8px;
      }
      .subtitulo {
        font-size: 16px;
        line-height: 24px;
        color: #444;
        padding: 0;
        margin-top: -20px;
        padding-bottom: 50px;
      }
    }
  }
  .minhasViagens__conteudo {
    display: flex;
    margin-bottom: 100px;
    .semViagens {
      background-image: url(https://www.staticontent.com/eva-core/assets/illustrations/despegar/scenes/0.0.7/24.svg);
      background-repeat: no-repeat;
      background-size: 278px 206px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 48px 0;
      min-height: 206px;
      margin-left: 318px;
      padding-left: 318px;
      .titulo {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3;
        color: #444;
      }
      .subTitulo {
        margin-top: -28px;
        font-size: 15px;
        line-height: 1.5;
        padding: 8px 0;
      }
    }
    .cardCoronaVirus {
      margin-left: 32px;
      background-color: #fff;
      padding: 20px;
      width: 410px;
      height: 62px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-top: 16px;

      .titulo {
        color: #444;
        font-size: 16px;
        margin-top: 1px;
        font-weight: 600;
        line-height: 24px;
      }
      .coronaVirusLink {
        margin-top: -32px;
        text-decoration: none;
      }
    }
  }

  .conteudoContainer {
    margin-top: 50px;
    width: 1000px;
    margin-left: 315px;
    display: flex;
  }
`;

export const MinhasViagensBoxConteudo = styled(PassagensBox)`
  margin-left: 100px;
`;
