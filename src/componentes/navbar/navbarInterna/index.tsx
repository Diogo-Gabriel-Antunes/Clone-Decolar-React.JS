import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, Conteudo, Box } from '../stylesNavBar';
import LogoDiretorio from '../../../assets/Logo_TV_2015.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import BackpackIcon from '@mui/icons-material/Backpack';
import jwt_decode from 'jwt-decode';
import nookies from 'nookies';
import { payload } from '../../../interfaces/Payload';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NavBarInterna = () => {
  const token = nookies.get(null).TOKEN;
  let payload: payload;
  if (token) {
    payload = jwt_decode(token);
  }

  const [usuario, setUsuario] = useState<any>(null);
  useEffect(() => {
    if (payload) {
      axios
        .get(`http://localhost:8080/usuarios/${payload.id}`)
        .then((resposta) => setUsuario(resposta.data.usuario));
    }
  }, []);
  return (
    <NavbarContainer>
      <div>
        <Link to="/">
          <Logo src={LogoDiretorio} alt="" />
        </Link>
      </div>
      <div>
        <Conteudo>
          <Box>
            <PhoneInTalkIcon sx={{ color: '#444444' }} />
            <p>Central de vendas </p>
          </Box>
          <Box>
            {usuario ? (
              <Link to="/passaporte" className="link">
                <PersonIcon sx={{ color: '#444444' }} />
                <p>Acessar Passaporte</p>
              </Link>
            ) : (
              <Link to="/login" className="link">
                <PersonIcon sx={{ color: '#444444' }} />
                <p>Iniciar Sessão</p>
              </Link>
            )}
          </Box>
          <Link to="/minhasviagens" className="link">
            <Box>
              <BackpackIcon sx={{ color: '#444444' }} />
              <p>Minha viagens</p>
            </Box>
          </Link>
          <Box>
            <HelpIcon sx={{ color: '#444444' }} />
            <p>Ajuda</p>
          </Box>
        </Conteudo>
      </div>
    </NavbarContainer>
  );
};

export default NavBarInterna;
