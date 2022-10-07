import styled from 'styled-components';
import { Formulario, Options } from '../../pages/home/stylesHome';

export const OptionPassagens = styled(Options)<{
  width: number;
  ativo: boolean;
}>`
  width: ${(props) => `${props.width}px`};
`;

export const FormPassagens = styled(Formulario)`
  .div_origem {
    position: relative;
    .input__origem {
      border-radius: 8px 0px 0px 8px;
    }
  }
  .destino__input {
    width: 100px;
  }
  .destino__margin {
    margin-right: 50px;
  }
  .div_quartos {
    .Quartos__input {
      padding-left: 42px;
    }
    .Pessoas__input {
      padding-left: 90px;
    }
  }
  .volta {
    left: 171px;
  }
`;
