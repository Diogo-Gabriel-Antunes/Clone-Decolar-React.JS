import { IPassagens } from '../../interfaces/IPassagens';
import { CardPassagensBox } from './styledCardPassagens';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

interface props {
  passagens: IPassagens[] | undefined;
}

const CardPassagens = ({ passagens }: props) => {
  return (
    <div>
      {passagens
        ? passagens.map((item) => (
            <CardPassagensBox elevation={8} sx={{ mb: 4 }} key={item.id}>
              <div className="container__grid">
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
                <div className="precoContainer">
                  <p className="apartir">A partir de</p>
                  <p>
                    {item.preco.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                  <div className="seguinte__div">
                    <Link to={`/passagens/${item.id}`}>
                      <p className="seguinte">Seguinte</p>{' '}
                      <ArrowForwardIosIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </CardPassagensBox>
          ))
        : ''}
    </div>
  );
};

export default CardPassagens;
