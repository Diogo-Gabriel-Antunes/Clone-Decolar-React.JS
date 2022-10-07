import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from 'react-router-dom';
import ICarros from '../../interfaces/ICarros';
import { CardBoxCarros } from './styleCardCarros';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import AddRoadIcon from '@mui/icons-material/AddRoad';

interface props {
  carros: ICarros[] | undefined;
}

const CardCarros = ({ carros }: props) => {
  return (
    <div>
      {carros
        ? carros.map((item) => (
            <CardBoxCarros key={item.id}>
              <img src={item.fotoDoCarro} alt="" />
              <div className="div__conteudo">
                <h3 className="titulo">{item.nome}</h3>
                <br />

                <div className="opcoes">
                  <PersonIcon />
                  <p className="opcoes__small"> {item.espaco} pessoas</p>
                  {item.arcondicionado ? (
                    <div className="cardInterno">
                      <AcUnitIcon />
                    </div>
                  ) : (
                    ''
                  )}
                  <LuggageIcon /> <p className="opcoes__small">1 Mala</p>
                  <DirectionsCarFilledIcon />{' '}
                  <p className="opcoes__small">{item.cambio}</p>
                  <AddRoadIcon />
                  <p className="opcoes__small">Ilimitado</p>
                </div>
                <p className=" locadora">Locadora:{item.locadora}</p>
                {item.seguro ? (
                  <div className="seguro">
                    <ul>
                      <li>Cobertura por dano e roubo com franquia</li>
                      <li>
                        Cancelamento até 24 horas antes da data de retirada
                      </li>
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>

              <div className="div__precos">
                <span className="infoPrecos">Preço total por dia</span>
                <div className="preco__container">
                  <span className="cifrao">R$</span>
                  <span className="preco">{item.precoPorDia}</span>
                </div>
                <div className="botao">
                  <Link to="" className="link">
                    <button>
                      <strong>Escolher Datas</strong>
                    </button>
                  </Link>
                </div>
                <div className="passaporte">
                  <img
                    src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
                    alt=""
                  />
                  <div className="mensagem">
                    <p>
                      Voce acumularia <strong>159 pontos</strong>
                    </p>
                  </div>
                </div>
                <div className="tiposdepagamento">
                  <p>Em ate 10x sem juros</p>
                </div>
              </div>
            </CardBoxCarros>
          ))
        : ''}
    </div>
  );
};

export default CardCarros;
