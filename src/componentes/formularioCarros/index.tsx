import { BoxOpions, FormBox } from '../../pages/home/stylesHome';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormularioCarrosBox } from './styledFormularioCarros';

const FormularioCarros = () => {
  const [destino, setDestino] = useState('');
  const [semData, setSemData] = useState(false);

  return (
    <FormBox>
      <BoxOpions>
        <div>
          <h1>Aluguel de carros</h1>
        </div>
        <br />
        <div>
          <FormularioCarrosBox>
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
              <div className="div_data">
                <CalendarMonthIcon />
                <label htmlFor="" className="data">
                  Data
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  disabled={semData}
                  className="data__input"
                  placeholder="Entrada"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  disabled={semData}
                  className="data__input__saida"
                  placeholder="Hora"
                />
              </div>
              <div className="div_data">
                <CalendarMonthIcon />
                <label htmlFor="" className="data">
                  Data
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  disabled={semData}
                  className="data__input"
                  placeholder="Saida"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  disabled={semData}
                  className="data__input__saida"
                  placeholder="Hora"
                />
              </div>
              <Link to={`/carros/${destino}`} className="link">
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
                  Buscar
                </Button>
              </Link>
            </div>
            <br />
            <div className="div__checkbox">
              <input
                type="checkbox"
                className="switch"
                onChange={() => setSemData(!semData)}
              />
              <span>Não tem data definida</span>
            </div>
          </FormularioCarrosBox>
        </div>
      </BoxOpions>
    </FormBox>
  );
};

export default FormularioCarros;
