import { BoxOpions, FormBox, Formulario } from '../../pages/home/stylesHome';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const FormularioAlugueis = () => {
  const [semData, setSemData] = useState(false);
  const [destino, setDestino] = useState('');
  const [dataEntrada, setDataEntrada] = useState('');
  const [dataSaida, setDataSaida] = useState('');

  return (
    <FormBox>
      <BoxOpions>
        <div>
          <h1>Alugueis por temporada</h1>
          <div></div>
        </div>
        <br />
        <div>
          <Formulario>
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
                  Entrada
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  disabled={true}
                  className="data__input"
                  placeholder="Entrada"
                  value={dataEntrada}
                  onChange={(e) => setDataEntrada(e.target.value)}
                />
                <label htmlFor="" className="data saida">
                  Saida
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  disabled={true}
                  className="data__input data__input__saida"
                  placeholder="Saida"
                  value={dataSaida}
                  onChange={(e) => setDataSaida(e.target.value)}
                />
              </div>
              <div className="div_quartos">
                <HotelIcon />
                <label htmlFor="Quartos" className="Quartos__label">
                  Quartos
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={'1'}
                  disabled={true}
                  className="Quartos__input"
                />
                <PersonIcon className="Pessoas__svg" />
                <label htmlFor="" className="Pessoas__label">
                  Pessoas
                </label>
                <input
                  type="text"
                  defaultValue={2}
                  disabled={true}
                  className="Pessoas__input"
                />

                <Link to={`/alugueiscasa/${destino}`} className="Link">
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
          </Formulario>
        </div>
      </BoxOpions>
    </FormBox>
  );
};

export default FormularioAlugueis;
