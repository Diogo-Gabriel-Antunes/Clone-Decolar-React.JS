import { BoxOpions, FormBox } from '../../pages/home/stylesHome';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { FormAtracoes } from './styledFormularioPasseios';
interface props {
  onView?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}
const FormularioAtracoes = ({ onView }: props) => {
  const [destino, setDestino] = useState('');

  return (
    <FormBox>
      <BoxOpions>
        <div>
          <h1>Passeios e atrações turisticas</h1>
        </div>
        <br />
        <div>
          <FormAtracoes>
            <div className="containerFormulario">
              <div className="div_destino">
                <label htmlFor="destino" className="destino">
                  Destino
                </label>
                <input
                  type="text"
                  name="destino"
                  id="destino"
                  placeholder="Insira uma cidade,hospedagem ou ponto..."
                  className="destino__input"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                />
                <LocationOnOutlinedIcon />
              </div>

              <div className="div_quartos">
                <Link to={`/passeios/${destino}`} className="Link">
                  {onView ? (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#FA503F',
                        ml: 2,
                        mt: 0.8,
                        width: 125,
                        height: 48,
                        minWidth: 125,
                        pl: 4,
                        borderRadius: 8,
                      }}
                      onClick={() => onView(false)}
                    >
                      <SearchIcon className="Busca__svg" />
                      Buscar
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#FA503F',
                        ml: 2,
                        mt: 0.8,
                        width: 125,
                        height: 48,
                        minWidth: 125,
                        pl: 4,
                        borderRadius: 8,
                      }}
                    >
                      <SearchIcon className="Busca__svg" />
                      Editar
                    </Button>
                  )}
                </Link>
              </div>
            </div>
            <br />
          </FormAtracoes>
        </div>
      </BoxOpions>
    </FormBox>
  );
};

export default FormularioAtracoes;
