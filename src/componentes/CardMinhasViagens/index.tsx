import ICarros from '../../interfaces/ICarros';
import ICasaAlugueis from '../../interfaces/ICasaAlugueis';
import IHospedagem from '../../interfaces/IHospedagens';
import { IPassagens } from '../../interfaces/IPassagens';
import { IViagens } from '../../interfaces/IViagens';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { IMinhasViagens } from '../../interfaces/IMinhasViagens';
import StarIcon from '@mui/icons-material/Star';
import {
  CardMinhasViagensComponent,
  HoteisMinhasViagensBox,
  MinhasViagensCarroBox,
  MinhasViagensHospedagemBox,
} from './styledCardsMinhasViagens';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import AddRoadIcon from '@mui/icons-material/AddRoad';
interface Props {
  minhasViagens?:
    | IPassagens[]
    | IMinhasViagens[]
    | IViagens[]
    | ICarros[]
    | ICasaAlugueis[]
    | IHospedagem[]
    | any[];
}

const CardMinhasViagens = ({ minhasViagens }: Props) => {
  console.log(minhasViagens);
  return (
    <>
      {minhasViagens?.map((item) => (
        <CardMinhasViagensComponent elevation={8} sx={{ mb: 4 }} key={item.id}>
          <div className="container__grid">
            {item.viagensId ? (
              <div className="companhia">
                <img src={item.imagemCompanhia} alt="" />
                <div className="origem">
                  <p>
                    <ConnectingAirportsIcon /> IDA : {item.destino}
                  </p>
                  <p>Data:{new Date(item.data).toLocaleDateString()}</p>
                  <p>{item.HorarioDaIda}</p>
                </div>
                <div className="Volta">
                  <p>
                    <ConnectingAirportsIcon /> VOLTA : {item.origem}
                  </p>
                  <p>Data:{new Date(item.dataVolta).toLocaleDateString()}</p>
                  <p>{item.HorarioDaVolta}</p>
                </div>
              </div>
            ) : (
              ''
            )}
            {item.alugueisCasaId ? (
              <HoteisMinhasViagensBox key={item.id}>
                <img src={item.imagem} alt="" className="img__alugueisCasa" />
                <div className="div__conteudo">
                  <h3 className="titulo">{item.nome}</h3>
                  <p className="distanciadocentro">
                    A {item.distanciadocentro}km do centro
                  </p>
                  <div className="cardInterno">
                    <p className="avaliacao">{item.avaliacao} </p>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="sobre">{item.sobre.substring(0, 150)}...</p>
                </div>
              </HoteisMinhasViagensBox>
            ) : (
              ''
            )}
            {item.atracaoId ? (
              <HoteisMinhasViagensBox key={item.id}>
                <img src={item.imagem} alt="" className="img__alugueisCasa" />
                <div className="div__conteudo">
                  <h3 className="titulo">{item.nome}</h3>
                  <p className="distanciadocentro">
                    {item.comentario} Comentarios <br />
                    {item.local}
                  </p>
                  <div className="cardInterno">
                    <p className="avaliacao">{item.avaliacao} </p>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="sobre">{item.sobre}</p>
                </div>
              </HoteisMinhasViagensBox>
            ) : (
              ''
            )}
            {item.alugueisCarrosId ? (
              <MinhasViagensCarroBox key={item.id}>
                <img
                  src={item.fotoDoCarro}
                  alt={item.nome}
                  className="imagemFotoDoCarro"
                />
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
              </MinhasViagensCarroBox>
            ) : (
              ''
            )}
            {item.hospedagemId ? (
              <MinhasViagensHospedagemBox key={item.id}>
                <img src={item.imagem} alt="" className="fotoHospedagem" />
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
                  <p className="sobre">{item.sobre.slice(0, 98) + ' ...'}</p>
                </div>
              </MinhasViagensHospedagemBox>
            ) : (
              ''
            )}
            <div className="precoContainer">
              <p className="apartir">A partir de</p>
              <p>
                {item.preco?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
                  ? item.preco?.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                  : item.precoPorDia?.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
              </p>
              <div className="seguinte__div">
                <Link to={`/passagens/${item.id}`}>
                  <p className="seguinte">Seguinte</p> <ArrowForwardIosIcon />
                </Link>
              </div>
            </div>
          </div>
        </CardMinhasViagensComponent>
      ))}
    </>
  );
};

export default CardMinhasViagens;
