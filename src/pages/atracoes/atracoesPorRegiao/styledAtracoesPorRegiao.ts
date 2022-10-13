import styled from 'styled-components';

export const AtracoesPorRegiãoBox = styled.div`
  .localizacao {
    background-color: #4300d2;
    .localizacao__container {
      display: flex;
      align-items: center;
      color: #fff;
      margin-left: 315px;
    }
  }
  .CaminhoPercorrido {
    margin-left: 315px;
    color: #4300d2;
    p {
      margin: 50px 0px;
      strong {
        color: #666;
      }
    }
  }
  .Formulario {
    background-color: #fff;
    margin-left: 315px;
    padding: 24px;
    width: 1223px;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    .Formulario__container {
      display: flex;
      align-items: center;
      border-right: 1px solid #444;
      padding-right: 16px;
      .labelViagem {
        font-size: 18px;
        color: #444;
        font-weight: 700;
        margin-right: 15px;
      }
      input {
        width: 100px;
        height: 4px;
      }
    }
    .pesquisa {
      position: relative;
      display: flex;
      align-items: center;
      a {
        margin-bottom: 7px;
      }
      .Busca__svg {
        left: 8px;
        top: 0px;
        color: #4300d2;
      }
      svg {
        position: absolute;
        left: 23px;
        top: 5px;
        width: 18px;
      }
      input {
        width: 472px;
        height: 30px;
        margin-left: 15px;
        border-radius: 6px;
        border: 1px solid #666;
        padding-left: 32px;
      }
    }
  }
  .filtros {
    display: flex;
    flex: row;
    margin-top: 16px;
    margin-left: 1106px;
    div {
      display: flex;
      flex-direction: row;
      margin-left: 8px;
    }
  }

  .titulo__container {
    margin-left: 315px;
    margin-top: 30px;
    h1 {
      margin-bottom: -8px;
      font-size: 14px;
      color: #444;
    }
    h2 {
      color: #444;
      margin-bottom: 30px;
    }
  }
`;
