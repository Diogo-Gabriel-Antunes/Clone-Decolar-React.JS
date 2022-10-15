import { Button } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import { IQuartos } from '../../../../../interfaces/IQuartos';

interface Props {
  quarto: IQuartos | undefined;
  qtdpessoas: string | undefined;
  dataCheckIn: string;
  dataCheckOut: string;
}
const DetalhesDoPagamentoHospedagem = ({
  quarto,
  qtdpessoas,
  dataCheckIn,
  dataCheckOut,
}: Props) => {
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
              {quarto?.preco
                ? (quarto?.preco * Number(qtdpessoas)).toLocaleString('pt-br', {
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
            {quarto?.preco
              ? (
                  quarto?.preco * Number(qtdpessoas) +
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
            <h3>{quarto?.nome}</h3>

            <div className="detalheDoPagamento__Ida">
              <div>
                <p>Check In:</p>
                <p>
                  <strong>
                    {new Date(`${dataCheckIn}`).toLocaleDateString()}
                  </strong>
                </p>
              </div>
              <div>
                <p>Check Out:</p>
                <p>
                  <strong>
                    {new Date(`${dataCheckOut}`).toLocaleDateString()}
                  </strong>
                </p>
              </div>
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

export default DetalhesDoPagamentoHospedagem;
