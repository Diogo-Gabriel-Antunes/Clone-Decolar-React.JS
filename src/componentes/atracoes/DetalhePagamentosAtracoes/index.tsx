import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import IAtracoes from '../../../interfaces/IAtracoes';
import { IOpcoesAtracoes } from '../../../interfaces/IOpcoesAtracoes';

interface Props {
  atracao: IAtracoes | undefined;
  opcao: IOpcoesAtracoes | undefined;
  qtdpessoas: string | undefined;
  dataCheckIn: string;
}
const DetalhesDoPagamentoAtracoes = ({
  atracao,
  opcao,
  qtdpessoas,
  dataCheckIn,
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
              {opcao?.preco
                ? (opcao?.preco * Number(qtdpessoas)).toLocaleString('pt-br', {
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
            {opcao?.preco
              ? (
                  opcao?.preco * Number(qtdpessoas) +
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
            <h3>{opcao?.nome}</h3>

            <div className="detalheDoPagamento__Ida">
              <div>
                <p>Data</p>
                <p>
                  <strong>
                    {new Date(`${dataCheckIn}`).toLocaleDateString()}
                  </strong>
                </p>
                <p>Duração</p>
                <p>
                  <strong>{opcao?.Duracao}</strong>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p>{atracao?.descricao}</p>
          </div>
          <div className="PoliticaDeCancelamento">
            <h3>Politica de alterações e cancelamento</h3>
            <div className="alteraçõesECancelamento">
              <p>Inclui :</p>
              <p>
                <TaskAltIcon />
                <strong> Guia: Português e Espanhol</strong>
              </p>
              <p>
                <TaskAltIcon />
                <strong> Transfers: Transfer com guia para o parque</strong>
              </p>
            </div>
            <div className="alteraçõesECancelamento">
              <p>Não Inclui :</p>
              <p>
                <RemoveDoneIcon />
                <strong>Refeições: comidas </strong>
              </p>
              <p>
                <RemoveDoneIcon />
                <strong> Bebidas: bebidas </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesDoPagamentoAtracoes;
