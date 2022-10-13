import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import { IQuartos } from '../../interfaces/IQuartos';
import { CardQuartos, CardQuartosBox } from './StyledCardQuartos';

import TvIcon from '@mui/icons-material/Tv';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotTubIcon from '@mui/icons-material/HotTub';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Link } from 'react-router-dom';

interface Props {
  quartos: IQuartos[] | undefined;
}
const QuartosCarroseul = ({ quartos }: Props) => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const handleRightClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(carousel.current?.offsetWidth);
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };
  const handleLeftClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };
  return (
    <CardQuartosBox>
      <div className="passaporte__container">
        <div className="carrossel__container">
          <div className="carrossel__wrapper" ref={carousel}>
            <div className="carrossel">
              <button
                className="button__left"
                onClick={(e) => handleLeftClick(e)}
              >
                <ArrowBackIosIcon />
              </button>
              {quartos?.map((item) => (
                <CardQuartos elevation={8} key={item.id}>
                  <div className="card__imagem">
                    <img src={item.imagem} alt="" className="card__imagem" />
                  </div>
                  <div className="card__conteudo">
                    <div className="card__titulo">
                      <h2 className="card__titulo">{item.nome}</h2>
                    </div>
                    <div className="card__itens">
                      {item.tv ? (
                        <div className="item">
                          <TvIcon />
                          <p>Televisão</p>
                        </div>
                      ) : (
                        ''
                      )}
                      {item.arCondicionado ? (
                        <div className="item">
                          <AcUnitIcon />
                          <p>Ar-Condicionado</p>
                        </div>
                      ) : (
                        ''
                      )}{' '}
                      {item.wifi ? (
                        <div className="item">
                          <WifiIcon />
                          <p>Wi-Fi grátis</p>
                        </div>
                      ) : (
                        ''
                      )}
                      {item.hidromassagem ? (
                        <div className="item">
                          <HotTubIcon />
                          <p>Hidromassagem</p>
                        </div>
                      ) : (
                        ''
                      )}{' '}
                      {item.frigobar ? (
                        <div className="item">
                          <SportsBarIcon />
                          <p>Frigobar</p>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div>
                      <Link to={`/quarto/${item.id}`}>Ver Quarto</Link>
                    </div>
                  </div>
                </CardQuartos>
              ))}
              <button
                className="button__right"
                onClick={(e) => handleRightClick(e)}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardQuartosBox>
  );
};

export default QuartosCarroseul;
