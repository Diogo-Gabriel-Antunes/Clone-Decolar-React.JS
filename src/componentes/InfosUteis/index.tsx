import { CardQuartosBox } from '../QuartosCarrosel/StyledCardQuartos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import IHospedagem from '../../interfaces/IHospedagens';
import { Paper } from '@mui/material';
import ICasaAlugueis from '../../interfaces/ICasaAlugueis';

interface Props {
  infos: IHospedagem | ICasaAlugueis | undefined;
}

const CarroseulInfosUteis = ({ infos }: Props) => {
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
    <CardQuartosBox alturaDoContainer={53}>
      <div className="passaporte__container">
        <div className="carrossel__container">
          <div className="carrossel__wrapper" ref={carousel}>
            <div className="carrossel">
              <Paper sx={{ p: 3, mr: 2, width: 296 }}>
                <p className="Info__paragrafo">
                  Alemão, Espanhol, Inglês e Português
                </p>
              </Paper>
              <Paper sx={{ p: 3, mr: 2, width: 296 }}>
                <h4 className="Info__titulo">Distancia do centro</h4>
                <p className="Info__paragrafo">
                  {infos?.distanciadocentro.toLocaleString('pt-br')}km
                </p>
              </Paper>
              <Paper sx={{ p: 3, mr: 2, width: 296 }}>
                <h4 className="Info__titulo">Avaliação</h4>
                <p className="Info__paragrafo">{infos?.avaliacao}</p>
              </Paper>
              <Paper sx={{ p: 3, mr: 2, width: 296 }}>
                <h4 className="Info__titulo">Check in</h4>
                <p className="Info__paragrafo">14:00</p>
              </Paper>
              <Paper sx={{ p: 3, mr: 2, width: 296 }}>
                <h4 className="Info__titulo">Check out</h4>
                <p className="Info__paragrafo">12:00</p>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </CardQuartosBox>
  );
};

export default CarroseulInfosUteis;
