import { Paper } from '@mui/material';
import styled from 'styled-components';
import { PassaporteBox } from '../../pages/passaporte/styledPassaporte';

export const CardQuartos = styled(Paper)`
  margin-right: 50px;
  background-color: #fff;
  height: 410px;
  border-radius: 8px;
  .card__imagem {
    border-radius: 8px 8px 0px 0px;
  }
  .card__conteudo {
    padding: 16px 24px;

    .card__titulo {
      font-size: 24px;
      color: rgb(102, 102, 102);
      line-height: 1.2;
      margin: 0;
      padding: 0;
      height: 42px;
    }
    .card__itens {
      display: grid;
      margin: 16px 0px;
      padding: 0;
      grid-template-columns: 109px 138px;
      width: 293px;
      margin-bottom: 32px;
      height: 52px;
      .item {
        font-size: 14px;
        display: flex;
        align-items: center;

        color: #666;
        min-width: 100px;
        svg {
          margin-right: 8px;
          width: 18px;
        }
        p {
          margin: 0;
        }
      }
    }
  }
`;

export const CardQuartosBox = styled(PassaporteBox)<{
  alturaDoContainer?: number;
}>`
  margin: 0;
  .passaporte__container {
    padding: 40px 0px;
    width: 1280px;
  }

  .passaporte__container .carrossel__container {
    height: ${(props) =>
      props.alturaDoContainer ? `${props.alturaDoContainer}px` : ''};
    .carrossel__wrapper .carrossel .button__right {
      left: 96.2%;
    }
  }
  .Info__titulo {
    padding: 0;
    margin: 0;
    font-size: 20px;
    color: #444;
  }
  .Info__paragrafo {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    color: #444;
  }
`;
