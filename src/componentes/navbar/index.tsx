import { NavbarContainer, BoxOpcoes, NavbarBox } from './stylesNavBar';

import BedIcon from '@mui/icons-material/Bed';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HouseIcon from '@mui/icons-material/House';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from 'react-router-dom';
import NavBarInterna from './navbarInterna';

interface props {
  hospedagem?: boolean;
  passagens?: boolean;
  pacotes?: boolean;
  ofertas?: boolean;
  alugueis?: boolean;
  passeios?: boolean;
  escapadas?: boolean;
  carros?: boolean;
  atracoes?: boolean;
  seguros?: boolean;
  transfer?: boolean;
}

const NavBarComponent = (props: props) => {
  return (
    <NavbarBox>
      <div>
        <NavBarInterna />
      </div>
      <NavbarContainer>
        <Link to={'/'} className="link">
          {props.hospedagem ? (
            <BoxOpcoes>
              <BedIcon
                sx={{ color: '#fff', bgcolor: '#270570', borderRadius: 99 }}
              />
              <p className="ativo">Hospedagens</p>
            </BoxOpcoes>
          ) : (
            <BoxOpcoes>
              <BedIcon sx={{ color: '#444444' }} />
              <p>Hospedagens</p>
            </BoxOpcoes>
          )}
        </Link>
        <Link to={'/passagens'} className="link">
          {props.passagens ? (
            <BoxOpcoes>
              <AirplanemodeActiveIcon
                sx={{ color: '#fff', bgcolor: '#270570', borderRadius: 99 }}
              />
              <p className="ativo">Passagens</p>
            </BoxOpcoes>
          ) : (
            <BoxOpcoes>
              <AirplanemodeActiveIcon sx={{ color: '#444444' }} />
              <p>Passagens</p>
            </BoxOpcoes>
          )}
        </Link>

        <Link to="/alugueiscasa" className="link">
          {props.alugueis ? (
            <BoxOpcoes>
              <HouseIcon
                sx={{ color: '#fff', bgcolor: '#270570', borderRadius: 99 }}
              />
              <p className="ativo">Alugueis</p>
            </BoxOpcoes>
          ) : (
            <BoxOpcoes>
              <HouseIcon sx={{ color: '#444444' }} />
              <p>Alugueis</p>
            </BoxOpcoes>
          )}
        </Link>
        <Link to={'/passeios'} className="link">
          {props.passeios ? (
            <BoxOpcoes>
              <ConfirmationNumberIcon
                sx={{ color: '#fff', bgcolor: '#270570', borderRadius: 99 }}
              />
              <p className="ativo">Passeios</p>
            </BoxOpcoes>
          ) : (
            <BoxOpcoes>
              <ConfirmationNumberIcon sx={{ color: '#444444' }} />
              <p>Passeios</p>
            </BoxOpcoes>
          )}
        </Link>

        <Link to={'/carros'} className="link">
          {props.carros ? (
            <BoxOpcoes>
              <DirectionsCarIcon
                sx={{ color: '#fff', bgcolor: '#270570', borderRadius: 99 }}
              />
              <p className="ativo">Carros</p>
            </BoxOpcoes>
          ) : (
            <BoxOpcoes>
              <DirectionsCarIcon sx={{ color: '#444444' }} />
              <p>Carros</p>
            </BoxOpcoes>
          )}
        </Link>
      </NavbarContainer>
    </NavbarBox>
  );
};

export default NavBarComponent;
