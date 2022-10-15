import { Paper } from '@mui/material';
import styled from 'styled-components';

export const CardPassagensBox = styled(Paper)`
  padding: 32px;
  .container__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    img {
      width: 140px;

      height: 140px;
    }

    .Volta {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      svg {
        width: 20px;
      }
      p {
        width: 300px;
        margin: 8px 0;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
    .origem {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      p {
        width: 154px;
        margin: 8px 0;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
    .precoContainer {
      border-left: 1px solid #666;
      padding: 0px 16px;
      width: 118px;
      .apartir {
        width: 195px;
        font-size: 14px;
        align-items: center;
        justify-content: flex-start;
        color: #888;
      }
      .formQtdPessoas {
        display: flex;
        flex-direction: column;
        label {
          font-size: 12px;
          color: #888;
        }
        input {
          width: 32px;
          margin-top: 4px;
        }
      }
    }
    .seguinte__div {
      display: flex;
      align-items: center;
      color: #4300d2;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        svg {
          width: 12px;
        }
        .seguinte {
          font-size: 14px;
        }
      }
    }
  }
`;
