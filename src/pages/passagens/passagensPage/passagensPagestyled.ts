import styled from 'styled-components';
import { CarrosBox } from '../../aluguelDeCarros/carros/styledPageCarros';
import { Formulario } from '../../home/stylesHome';

export const PassagensBox = styled(CarrosBox)`
  .container__grid {
    .pesquisa {
      height: 470px;
      h3 {
        margin-bottom: 50px;
      }
      .div__local {
        margin-top: 15px;
      }
      .botao {
        margin-top: 50px;
      }
    }
  }
  .data__volta {
    position: absolute;
    color: #888;
    left: 164px;
    top: 7px;
  }
`;

export const InputClassePessoas = styled(Formulario)`
  .div_quartos {
    width: 95%;
    height: 57px;
    display: flex;
    margin-left: 0;
    input {
    }
  }
`;
