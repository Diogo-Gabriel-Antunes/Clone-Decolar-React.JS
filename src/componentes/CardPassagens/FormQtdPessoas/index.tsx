import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IPassagens } from '../../../interfaces/IPassagens';

interface Props {
  passagem: IPassagens;
}

const FormQtdPessoas = ({ passagem }: Props) => {
  const [qtdPessoas, setQtdPessoas] = useState(1);
  return (
    <>
      <div className="formQtdPessoas">
        <label htmlFor="">Pessoas</label>
        <input
          type="number"
          value={qtdPessoas}
          onChange={(e) => {
            if (Number(e.target.value) <= 0 || Number(e.target.value) >= 8) {
              alert('No minimo 1 e no maximo 8');
            } else {
              setQtdPessoas(Number(e.target.value));
            }
          }}
        />
      </div>

      <div className="seguinte__div">
        <Link to={`passagem/${passagem.id}/${qtdPessoas}`}>
          <p className="seguinte">Seguinte</p> <ArrowForwardIosIcon />
        </Link>
      </div>
    </>
  );
};

export default FormQtdPessoas;
