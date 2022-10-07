import {
  BoxOpions,
  FormBox,
  Formulario,
  Options,
} from '../../pages/home/stylesHome';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';
interface props {
  setDestino: Dispatch<SetStateAction<string>>;
  destino: string;
}
const FormularioHospedagem = ({ setDestino, destino }: props) => {
  const [todos, setTodos] = useState<boolean>(true);
  const [hoteis, setHoteis] = useState<boolean>(false);
  const [alugueis, setAlugueis] = useState<boolean>(false);
  const [semData, setSemData] = useState(false);

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
          <h1>Hospedagem</h1>
          <div>
            <div>
              <Options
                width={75}
                ativo={todos}
                onClick={() => (todos ? '' : handleClickTodos())}
              >
                <span>Todos</span>
              </Options>
              <Options
                width={110}
                ativo={hoteis}
                onClick={() => (hoteis ? '' : handleClickHoteis())}
              >
                <ApartmentIcon />
                <span>Hoteis</span>
              </Options>
              <Options
                width={240}
                ativo={alugueis}
                onClick={() => (alugueis ? '' : handleClickAlugueis())}
              >
                <HouseIcon />
                <span>Alugueis por temporada</span>
              </Options>
            </div>
          </div>
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
                  Data
                </label>
                <input
                  type="text"
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
                  placeholder="Saida"
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
                  disabled={semData}
                  className="Quartos__input"
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

                <Link to={`/hospedagem/${destino}`} className="Link">
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

export default FormularioHospedagem;
