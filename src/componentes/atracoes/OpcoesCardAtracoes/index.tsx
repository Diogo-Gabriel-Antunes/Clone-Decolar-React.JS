import { Button } from '@mui/material';
import IAtracoes from '../../../interfaces/IAtracoes';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IOpcoesAtracoes } from '../../../interfaces/IOpcoesAtracoes';

interface Props {
  opcoes: IOpcoesAtracoes | undefined;
  atracao: IAtracoes | undefined;
}
const OpcoesCardAtracoes = ({ opcoes, atracao }: Props) => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('08:00');
  const [pessoas, setPessoas] = useState('');
  console.log(opcoes);
  return (
    <div>
      <div className="opcoes__card">
        <div className="opcoes__card__containerFirst">
          <h4>
            {opcoes?.qtdDias
              ? opcoes?.qtdDias === 1
                ? `${opcoes?.qtdDias} dia`
                : `${opcoes?.qtdDias} dias`
              : ''}
            {'   '}
            {atracao?.nome}
          </h4>
          <div className="opcoes__card__duracaoBox">
            <p className="opcoes__card__duracao">
              <AccessTimeIcon /> Duração : {opcoes?.Duracao}.
            </p>
            <p>Disponível: Todos os dias</p>
          </div>
          <div className="opcoes__card__inclui">
            <p>Inclui</p>
            <ul>
              <li>
                <CheckIcon />
                Transfers: Transfer com guia para o parque
              </li>
            </ul>
          </div>
          <div className="opcoes__card__form">
            <div className="box__form">
              <label htmlFor="">Data</label>
              <input
                type="date"
                className="input__Data"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className="box__form">
              <label htmlFor="">Horario</label>
              <input
                type="time"
                className="input__Horario"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              />
            </div>
            <div className="box__form">
              <label htmlFor="">Quantidade de pessoas</label>
              <input
                type="number"
                className="input__Pessoas"
                value={pessoas}
                onChange={(e) => setPessoas(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="opcoes__card__containerSecond">
          <div className="opcoes__card__border">
            <p className="opcoes__card__paragrafo">
              Preço por adulto a partir de
            </p>
            <div className="opcoes__card__preco">
              <p className="opcoes__card__preco__cifrao">R$</p>
              <p className="opcoes__card__preco__valor">{opcoes?.preco}</p>
            </div>
            {data === '' ? (
              <Button
                variant="contained"
                sx={{
                  width: 173,
                  height: 36,
                  mx: 1,
                  bgcolor: '#4300D2',
                  borderRadius: 24,
                  my: 2,
                }}
              >
                Escolher data
              </Button>
            ) : (
              <Link
                to={`reserva/${atracao?.id}/${opcoes?.id}`}
                className="link"
              >
                {' '}
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    width: 173,
                    height: 36,
                    mx: 1,

                    borderRadius: 24,
                    my: 2,
                  }}
                >
                  Selecionar
                </Button>
              </Link>
            )}
          </div>
          <div className="opcoes__card__pontos">
            <img
              src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
              alt=""
            />
            <p>
              Voce ganha <strong> {opcoes?.preco} pontos</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpcoesCardAtracoes;
