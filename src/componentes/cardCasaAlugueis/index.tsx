import StarIcon from '@mui/icons-material/Star';
import { Link, useParams } from 'react-router-dom';
import ICasaAlugueis from '../../interfaces/ICasaAlugueis';
import { CardBox } from '../hospedagem/CardHospedagem/styledCardHoteis';

interface props {
  casaAlugueis: ICasaAlugueis[] | undefined;
}

const CardAlugueisCasa = ({ casaAlugueis }: props) => {
  const { destino } = useParams();
  return (
    <div>
      {casaAlugueis
        ? casaAlugueis.map((item) => (
            <CardBox key={item.id}>
              <img src={item.imagem} alt="" />
              <div className="div__conteudo">
                <h3 className="titulo">{item.nome}</h3>
                <p className="distanciadocentro">
                  A {item.distanciadocentro}km do centro
                </p>
                <div className="cardInterno">
                  <p>{item.avaliacao} </p>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="sobre">{item.sobre}</p>
              </div>
              <div className="div__precos">
                <span className="infoPrecos">
                  Preço por noite com impostos a partir de:
                </span>
                <div className="preco__container">
                  <span className="cifrao">R$</span>
                  <span className="preco">{item.preco}</span>
                </div>
                <div className="botao">
                  <Link
                    to={`/alugueiscasa/${destino}/${item.id}`}
                    className="link"
                  >
                    <button>
                      <strong>Ver detalhes</strong>
                    </button>
                  </Link>
                </div>
                <div className="passaporte">
                  <img
                    src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
                    alt=""
                  />
                  <div className="mensagem">
                    <p className="passaportedecolar">Passaporte Decolar</p>
                    <p>
                      Voce acumularia <strong>159 pontos</strong>
                    </p>
                  </div>
                </div>
                <div className="tiposdepagamento">
                  <p>Pague para a hospedagem ou em parcelas</p>
                </div>
              </div>
            </CardBox>
          ))
        : ''}
    </div>
  );
};

export default CardAlugueisCasa;
