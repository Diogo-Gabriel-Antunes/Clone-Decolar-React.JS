import styled from 'styled-components';

export const CarrosBox = styled.div`
  margin-left: 315px;
  padding: 0 12px;
  .Caminho {
    .Caminho__paragrafo {
      color: blue;
      strong {
        color: #666666;
        font-weight: 500;
      }
    }
  }
  h1 {
    color: #666666;
  }
  .container__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 75px;
    color: #444;
    .pesquisa {
      background-color: #270570;
      width: 255.75px;
      padding: 24px 12px 20px;
      color: #fff;
      border-radius: 8px;
      height: 400px;

      .div__local {
        position: relative;
        margin-top: 50px;
        .input__local {
          height: 38px;
          width: 83%;
          border-radius: 6px 0px 0px 6px;
          border: none;
          padding-left: 40px;
          padding-top: 15px;
        }
        .label__local {
          position: absolute;
          color: #666666;
          left: 40px;
          top: 5px;
        }
        .icone {
          position: absolute;
          color: #666;
          top: 15px;
          left: 7px;
        }
      }
    }
    .ordenador {
      padding: 2px 0 2px 28px;
      margin-bottom: 24px;
      select {
        height: 36px;
        padding: 0 28px 0 12px;
        border-radius: 6px;
        font-size: 14px;
        color: #888;
        border-color: #ccc;
        width: 100%;
        box-sizing: border-box;
        box-shadow: none;
      }
    }
    .locadoras {
      padding: 2px 0 2px 28px;
      font-size: 14px;
      input {
        width: 32px;
      }
    }
    .quantidadedepessoas {
      padding: 2px 0 2px 28px;
    }
  }
  .div_data {
    position: relative;
    display: flex;
    margin: 30px 0px;
    .data {
      position: absolute;
      color: #888;
      left: 38px;
      top: 7px;
    }
    .data__input {
      width: 80%;
      border-radius: 6px 0px 0px 6px;
      padding-left: 38px;
      padding-top: 14px;
      outline: 0;
      border: 0;
      color: #888;
      border-right: #888 1px solid;
      height: 38px;
    }
    .data__input__saida {
      width: 80%;
      border-radius: 0px 6px 6px 0px;
      padding: 0px 12px;
      padding-top: 14px;
      outline: 0;
      border: 0;
      height: 39px;
    }
    svg {
      color: gray;
      position: absolute;
      top: 16px;
      left: 10px;
    }
  }
`;
