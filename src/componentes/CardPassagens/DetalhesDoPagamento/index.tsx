import { Button } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import { IViagens } from '../../../interfaces/IViagens';

interface Props {
  viagem: IViagens | undefined;
  qtdpessoas: string | undefined;
}
const DetalhesDoPagamento = ({ viagem, qtdpessoas }: Props) => {
  return (
    <div className="DetalheDoPagamento">
      {' '}
      <div className="container__titulo">
        <h1>Detalhe do pagamento</h1>
      </div>
      <div className="card">
        <div className="card__border">
          <div className="preco__display">
            <p>Voo para {qtdpessoas} pessoas</p>
            <p>
              {viagem?.preco
                ? (viagem?.preco * Number(qtdpessoas)).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : ''}
            </p>
          </div>
          <div className="preco__display">
            <p>Impostos e taxas</p>
            <p>
              {(123 * Number(qtdpessoas)).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </div>
        <div className="preco__display ">
          <p>
            <strong> Total</strong>
          </p>
          <p>
            {viagem?.preco
              ? (
                  viagem?.preco * Number(qtdpessoas) +
                  123 * Number(qtdpessoas)
                ).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : ''}
          </p>
        </div>
      </div>
      <div className="container__titulo">
        <h1>Detalhes da compra</h1>
      </div>
      <div className="detalheDoPagamentoContainer">
        <div className="card">
          <div>
            <h3>
              {viagem?.origem}
              {'   '} - {'    '} {viagem?.destino}
            </h3>
            <p>Ida e volta, {qtdpessoas} pessoas</p>
          </div>
          <div className="detalheDoPagamento__Ida">
            <p>IDA</p>
            <p>
              <strong>
                {new Date(`${viagem?.data}`).toLocaleDateString()}
              </strong>
            </p>
            <div className="detalheDoPagamento__companhia">
              <img src={viagem?.imagemCompanhia} alt="" />
            </div>
            <div className="detalheDoPagamento__horarios">
              <p>
                Ida: {'  '}
                <strong>{viagem?.HorarioDaIda}</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className="detalheDoPagamento__Ida">
            <p>VOLTA</p>
            <p>
              <strong>
                {new Date(`${viagem?.dataVolta}`).toLocaleDateString()}
              </strong>
            </p>
            <div className="detalheDoPagamento__companhia">
              <img src={viagem?.imagemCompanhia} alt="" />
            </div>
            <div className="detalheDoPagamento__horarios">
              <p>
                VOLTA:{'  '}
                <strong>{viagem?.HorarioDaVolta}</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className="PoliticaDeCancelamento">
            <h3>Politica de alterações e cancelamento</h3>
            <div className="alteraçõesECancelamento">
              <p>Alterações :</p>
              <p>
                <TaskAltIcon />
                <strong> Permite (com custo)</strong>
              </p>
            </div>
            <div className="alteraçõesECancelamento">
              <p>Cancelamento :</p>
              <p>
                <RemoveDoneIcon />
                <strong>Não reembolsável </strong>
              </p>
            </div>
            <p className="PoliticaDeCancelamento__termos">
              *Caso o cancelamento seja solicitado 24h após a realização da
              compra e ao menos 7 dias antes da data do embarque, o reembolso
              será integral conforme Resoluções da ANAC.
            </p>
            <Button sx={{ color: '#4300d2' }}>
              Ver politicas de alterações e cancelamentos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesDoPagamento;
