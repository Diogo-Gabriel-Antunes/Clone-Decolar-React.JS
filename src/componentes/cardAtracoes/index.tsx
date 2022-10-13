import { Paper } from '@mui/material';
import IAtracoes from '../../interfaces/IAtracoes';
import { CardAtracoesBox } from './styledCardAtracoes';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';

interface props {
  atracoes: IAtracoes[] | undefined;
}

const CardAtracoes = ({ atracoes }: props) => {
  return (
    <CardAtracoesBox>
      {atracoes
        ? atracoes.map((item) => (
            <Link key={item.id} to={`${item.id}`} className="link">
              <Paper>
                <div>
                  <img src={item.imagem} alt="" />
                </div>
                <div className="conteudo__container">
                  <div>
                    <h2>{item.nome}</h2>
                  </div>
                  <div className="conteudo__segundoContainer">
                    <p className="conteudo__avaliacao">{item.avaliacao}</p>
                    <p className="conteudo__avaliacaoTexto">Fantastico</p>
                    <p className="conteudo__comentarios">
                      {' '}
                      {item.comentario} Comentarios{' '}
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="conteudo__preco">
                  <div>
                    <p>Preço por adulto a partir de</p>
                    <div className="conteudo__precoInterno">
                      <HelpOutlineIcon sx={{ color: '#4300d2', width: 16 }} />
                      <p className="preco__cifrao"> R$</p>
                      <p className="preco__valor">{item.preco}</p>
                    </div>
                  </div>
                </div>
                <div className="passe__decolar">
                  <img
                    src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
                    alt=""
                  />
                  <p>
                    Voce ganha <strong> {item.preco} pontos</strong>
                  </p>
                </div>
                <div className="metodoDePagamento">
                  <CreditCardIcon />
                  <p>Em ate 10x sem juros</p>
                </div>
              </Paper>
            </Link>
          ))
        : ''}
    </CardAtracoesBox>
  );
};

export default CardAtracoes;
