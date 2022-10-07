import styled from 'styled-components';

export const Options = styled('div')<{ width: number; ativo: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  margin: 8px 2px 8px 0;
  padding: 5px 14px;
  box-sizing: border-box;
  cursor: pointer;

  border: 1px solid #4300d2;
  height: 32px;
  margin-left: 16px;
  width: ${(Props) => `${Props.width}px`};
  border-radius: 24px;
  display: flex;
  ${(props) =>
    props.ativo
      ? `
  background-color: #fff;
  color: #4300d2;`
      : `background-color: #4300d2;
  color: #fff;`};
`;

export const BoxOpions = styled.div`
  margin: 0 420px;
  width: 1130px;
  height: 175px;
  background-color: #270570;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;

  div {
    display: inline-flex;

    h1 {
      font-size: 20px;
      display: flex;
      align-items: center;
    }
  }
`;

export const FormBox = styled.div`
  max-width: 1920px;
  color: #fff;
  height: 240px;
  border-top: solid 1px #cccccc;
  background-size: 68%;
  background-image: linear-gradient(0, #ddd5f5 0%, #ddd5f5 100%);
`;

export const Formulario = styled.form`
  margin-top: 16px;
  .containerFormulario {
    background-color: #fff;
    height: 60px;
    width: 343.41px;
    border-radius: 8px;
  }
  .destino {
    position: absolute;
    color: #888;
    top: 7px;
    left: 47px;
  }
  .destino__input {
    width: 343.41px;
    border-radius: 6px;
    border: 0;
    padding-left: 47px;
    padding-top: 15px;
    outline: 0;
  }
  svg {
    color: gray;
    position: absolute;
    top: 16px;
    left: 10px;
  }
  .div_destino {
    position: relative;
  }
  .div_data {
    position: relative;
    margin-left: 10px;
    .saida {
      left: 173px;
    }
  }
  .data {
    position: absolute;
    color: #888;
    left: 38px;
    top: 7px;
  }
  .data__input {
    width: 120px;
    border-radius: 6px 0px 0px 6px;
    padding-left: 38px;
    padding-top: 14px;
    outline: 0;
    border: 0;
    color: #888;
    border-right: #888 1px solid;
  }
  .data__input__saida {
    width: 120px;
    border-radius: 0px 6px 6px 0px;
    padding: 0px 12px;
    padding-top: 14px;
    outline: 0;
    border: 0;
  }
  .div_quartos {
    position: relative;
    margin-left: 10px;
    background-color: #fff;
    width: 0.01px;
    height: 60px;
    border-radius: 6px 0px 0px 6px;
    .Quartos__label {
      position: absolute;
      color: #888;
      left: 38px;
      top: 6px;
    }
    .Quartos__input {
      border: 0;
      outline: 0;
      border-radius: 6px 0px 0px 6px;
      width: 60px;
      padding-left: 64px;
      padding-top: 14px;
    }
    svg {
      position: absolute;
      top: 16px;
      left: 10px;
    }
    .Pessoas__svg {
      left: 145px;
      color: #888;
    }
    .Pessoas__input {
      border-radius: 0px 6px 6px 0px;
      margin-left: 0px;
      border: 0;
      outline: 0;
      width: 60px;
      padding-left: 64px;
      padding-top: 14px;
    }
    .Pessoas__label {
      position: absolute;
      left: 167px;
      color: #888;

      top: 6px;
    }
    .Busca__svg {
      position: absolute;
      left: 10px;
      color: #fff;
      top: 12px;
    }
    .Link {
      text-decoration: none;
    }
  }
  .switch {
    appearance: none;
    width: 30px;
    height: 20px;
    background-color: #888;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
    position: absolute;
  }
  .switch::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #d5d5d5;
    border-radius: 50%;
    left: 3px;
    top: 3px;
    transition: 0.3s;
  }
  .switch::after {
    content: '';
    position: absolute;
    color: #34384b;

    left: 20px;
    top: 29px;
    transition: 0.3s;
  }
  .switch:checked {
    background: #2705f0;
  }
  .switch:checked::before {
    left: 12px;
    top: 3px;
  }
  .div__checkbox {
    display: flex;
    width: 100%;
    position: relative;
    margin: 16px 400px;
    span {
      position: absolute;
      left: 41px;
      top: 5px;
    }
  }
`;

export const ImagensBox = styled.div`
  margin: 72px 315px;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;

  .div__semanadoturismo {
    width: 620px;
    .imagem__semanadoturismo {
      width: 620px;
      border-radius: 12px;
    }
  }
  .div__voosparaargentina {
    width: 299px;
    .imagem__voosparaargentina {
      width: 299px;
      border-radius: 12px;
    }
  }
  .div__hoteis {
    margin-left: -10px;
    width: 299px;
    .imagem__hoteis {
      width: 299px;
      border-radius: 12px;
    }
  }
`;

export const PromocaoBox = styled.div`
  width: 1310px;
  background-color: #fff;
  margin-left: 315px;
  display: flex;
  .promoção__botao {
    margin-top: 50px;
    background-color: #4300d2;
    padding: 0 20px;
    height: 48px;
    font-size: 16px;
    line-height: 48px;
    color: #fff;
    border: none;
    border-radius: 24px;
    cursor: pointer;
  }
  .image {
    background-image: url('//media.staticontent.com/media/pictures/cf6f3b22-86eb-480c-a50b-b0165f77003c');
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 500px;
    height: 580px;
  }
  .promocao__container {
    padding: 32px;
    margin-right: px;
    h6 {
      margin-top: -32px;
      font-family: Rubik;
      font-size: 20px;
      .red {
        color: red;
      }
    }
    h4 {
      font-family: Rubik;
      font-weight: 500;
      font-size: 36px;
      width: 700px;
      .red {
        color: red;
      }
    }
    .div__grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      .div__card {
        border: #d5d5d5 1px solid;
        border-radius: 8px;
        width: 220px;
        padding: 8px;
        .div__icon {
          background-image: url(https://media.staticontent.com/media/pictures/a70be72e-c22e-4e10-b907-91df389b08cf);
          background-repeat: no-repeat;
          background-size: 78px 64px;
          width: calc(100% -20px);
          height: 69px;
        }
        .description {
          margin-top: 8px;
          font-size: 14px;
          width: 100%;
        }
        .div__icon__clock {
          background-image: url(https://media.staticontent.com/media/pictures/25a662b9-122e-4bf7-b80c-50ed73d44636);
          width: calc(100% -20px);
          height: 69px;
          background-repeat: no-repeat;
          background-size: 39px 36px;
          margin-top: 20px;
          margin-bottom: -25px;
        }
        .div__icon__airplane {
          background-image: url(https://media.staticontent.com/media/pictures/c325f83a-bb85-438d-b772-e7fbb1a3b383);
          background-size: 50px 40px;
          background-repeat: no-repeat;
          width: calc(100% -20px);
          height: 69px;
          margin-top: 20px;
          margin-bottom: -25px;
        }
      }
    }
  }
`;

export const Condicoes = styled.div`
  font-size: 12px;
  text-align: center;
  color: #666;
  font-family: Rubik;
  font-weight: 400;
  display: block;
  letter-spacing: 0.1px;
  margin: auto;
  padding: 10px 0;
  width: 100%;
`;

export const InfosBox = styled.div`
  margin-left: 315px;
  margin-top: 20px;
  margin-bottom: 100px;
  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: #444444;
  }
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 1349px;

    .card__conteudo {
      background-color: #fff;
      max-width: 238px;
      padding: 42px 30px;
      color: #444;
      border: 1px solid #cccccc;
      border-radius: 8px;
      font-family: inherit;

      font-style: inherit;
      font-variant: inherit;
      font-weight: inherit;
      line-height: inherit;

      p {
        border: 0;
        font-family: inherit;
        font-size: 100%;
        font-style: inherit;
        font-variant: inherit;
        font-weight: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        color: #666;
      }
    }
  }
`;

export const SeoBox = styled.div`
  margin-left: 315px;
  width: 844px;
  .listas__subContainer {
    margin-right: 75px;
  }
  .title {
    font-size: 24px;
    color: #444444;
    line-height: 32px;
    font-weight: 500;
  }
  .texto {
    font-size: 12px;
    line-height: 1.33;
    color: #888888;
  }
  .lista {
    list-style: none;
    margin-left: -40px;
  }
  .lista__item__title {
    font-size: 12px;
    margin-bottom: 12px;
    font-weight: 700;
    color: #444;
  }
  .lista__item {
    font-size: 12px;
    color: #888;
    line-height: 1.33;
  }
  .listas__container {
    display: flex;
    flex-direction: row;
  }
`;
