import { BoxOpions, FormBox } from '../../pages/home/stylesHome';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { FormPassagens, OptionPassagens } from './styledFormularioPassagens';

const FormularioPassagens = () => {
  const [todos, setTodos] = useState<boolean>(true);
  const [hoteis, setHoteis] = useState<boolean>(false);
  const [alugueis, setAlugueis] = useState<boolean>(false);
  const [dataIda, setDataIda] = useState<string>();
  const [dataVolta, setDataVolta] = useState<string>();
  const [semData, setSemData] = useState(false);
  const [destino, setDestino] = useState('');
  const [origem, setOrigem] = useState('');

  function handleClickTodos() {
    setTodos(true);
    setHoteis(false);
    setAlugueis(false);
  }
  function handleClickHoteis() {
    setTodos(false);
    setHoteis(true);
    setAlugueis(false);
  }
  function handleClickAlugueis() {
    setTodos(false);
    setHoteis(false);
    setAlugueis(true);
  }

  return (
    <FormBox>
      <BoxOpions>
        <div>
          <h1>Passagens</h1>
          <div>
            <div>
              <OptionPassagens
                width={112}
                ativo={todos}
                onClick={() => (todos ? '' : handleClickTodos())}
              >
                <span>Ida e volta</span>
              </OptionPassagens>
              <OptionPassagens
                width={103}
                ativo={hoteis}
                onClick={() => (hoteis ? '' : handleClickHoteis())}
              >
                <span>So ida</span>
              </OptionPassagens>
              <OptionPassagens
                width={128}
                ativo={alugueis}
                onClick={() => (alugueis ? '' : handleClickAlugueis())}
              >
                <span>Multidestino</span>
              </OptionPassagens>
            </div>
          </div>
        </div>
        <br />
        <div>
          <FormPassagens>
            <div className="containerFormulario">
              <div className="div_origem">
                <label htmlFor="destino" className="destino">
                  Origem
                </label>
                <input
                  type="text"
                  name="destino"
                  id="destino"
                  placeholder="Insira uma cidade"
                  className="destino__input input__origem"
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                />
                <LocationOnOutlinedIcon />
              </div>
              <div className="div_destino">
                <label htmlFor="destino" className="destino">
                  Destino
                </label>
                <input
                  type="text"
                  name="Desino"
                  id="destino"
                  placeholder="Insira uma cidade"
                  className="destino__input destino__margin"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                />
              </div>
              <div className="div_data">
                <CalendarMonthIcon />
                <label htmlFor="" className="data">
                  Data ida
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  disabled={semData}
                  className="data__input"
                  placeholder="Ida"
                  value={dataIda}
                  onChange={(e) => setDataIda(e.target.value)}
                />
                <label htmlFor="" className="data volta">
                  Data Volta
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  disabled={semData}
                  className="data__input__saida data__input"
                  placeholder="Volta"
                  value={dataVolta}
                  onChange={(e) => setDataVolta(e.target.value)}
                />
              </div>
              <div className="div_quartos">
                <HotelIcon />
                <label htmlFor="Quartos" className="Quartos__label">
                  Classe
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={'Eco'}
                  disabled={semData}
                  className=" Quartos__input "
                />
                <PersonIcon className="Pessoas__svg" />
                <label htmlFor="" className="Pessoas__label">
                  Pessoas
                </label>
                <input
                  type="text"
                  defaultValue={2}
                  disabled={semData}
                  className="Pessoas__input"
                />

                {dataIda && dataVolta ? (
                  <Link
                    to={`/passagens/${destino}/${origem}/${dataIda}/${dataVolta}`}
                    className="Link"
                  >
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
                ) : (
                  <Link to={`/passagens/${destino}/${origem}`} className="Link">
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
                )}
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
          </FormPassagens>
        </div>
      </BoxOpions>
    </FormBox>
  );
};

export default FormularioPassagens;
