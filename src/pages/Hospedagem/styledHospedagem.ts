import styled from "styled-components";

export const HospedagemBox = styled.div`
  margin-left: 315px;
  color: blue;
  margin-top: 15px;

  .Card {
    display: flex;
    width: 1270px;
    margin-top: 30px;
    .Botao {
      margin-top: 30px;
      border: 1px solid #666666;
      padding: 6px 16px;
      border-radius: 24px;
      color: #666666;
    }
    .div__Botao {
      margin: 30px 4px;
      &:hover {
        .Botao {
          color: blue;
          border: 1px solid blue;
        }
      }
    }
    .first {
      margin-left: 16px;
    }
  }
  h3 {
    margin-top: 50px;
    margin-bottom: 2px;
    font-size: 32px;
    color: #444444;
  }
  p {
    color: #444444;
    font-size: 16px;
  }
`;
