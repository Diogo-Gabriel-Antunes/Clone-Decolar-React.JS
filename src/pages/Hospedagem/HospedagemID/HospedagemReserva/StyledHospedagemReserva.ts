import styled from 'styled-components';
import { PassagemIdBox } from '../../../passagens/passagensPage/PassagemReserva/StyledPassagemId';

export const HospedagemReservaBox = styled(PassagemIdBox)`
  .DataInfos {
    label {
      font-size: 16px;
      margin-top: 16px;
    }
    input {
      width: 115px;
      height: 24px;
      padding: 8px;
    }
  }
  .botoesDeFinalizar {
    margin: 16px 0;
  }
`;
