import styled from "styled-components";

export const BoxNavbar = styled.div`
  background-color: #fff;
  height: 100%;
`;

export const BoxLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 348px 1fr;
  grid-template-areas: ". box .";
  .Login__form {
    grid-area: box;
    background-color: #fff;
    height: 450px;
    margin-top: 30px;
    border-radius: 6px;
    padding: 8px 16px;
    .Login__conteudo {
      p {
        color: #4300d2;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
        font-size: 14px;
        strong {
          font-weight: 500;
          color: #444;
        }
        a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 24px;

      img {
        width: 64px;
        height: 64px;
      }
      p {
        color: #444;
      }
    }
  }
`;
