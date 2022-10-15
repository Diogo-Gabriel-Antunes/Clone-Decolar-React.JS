import NavBarComponent from '../../../componentes/navbar';
import { CarrosBox } from './styledPageCarros';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ICarros from '../../../interfaces/ICarros';
import axios from 'axios';
import Footer from '../../../componentes/Footer';
import CardCarros from '../../../componentes/carros/cardCarros';

const PageCarros = () => {
  const [carros, setCarros] = useState<ICarros[]>();
  const [localDeRetirada, setLocalDeRetirada] = useState('');
  const parametros = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/carros?localDeRetirada=${parametros.localDeRetirada}`
      )
      .then((resposta) => setCarros(resposta.data.carros));
  }, [parametros]);
  return (
    <div>
      <div>
        <NavBarComponent carros={true} />
      </div>
      <CarrosBox>
        <div className="Caminho">
          <p className="Caminho__paragrafo">
            Decolar : Carros : <strong>Aluguel de carros </strong>
          </p>
        </div>
        <h1>Aluguel de carros</h1>

        <div className="container__grid">
          <div>
            <div className="pesquisa">
              <h3>Aluguel de carros</h3>
              <div className="div__local">
                <LocationOnOutlinedIcon className="icone" />
                <label htmlFor="" className="label__local">
                  Local de retirada
                </label>
                <input
                  type="text"
                  className="input__local"
                  placeholder="seu destino"
                  value={localDeRetirada}
                  onChange={(e) => setLocalDeRetirada(e.target.value)}
                />
                <div>
                  <div className="div_data">
                    <CalendarMonthIcon />
                    <label htmlFor="" className="data">
                      Data
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="data__input"
                      placeholder="Entrada"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="data__input__saida"
                      placeholder="Hora"
                    />
                  </div>
                </div>

                <div>
                  <div className="div_data">
                    <CalendarMonthIcon />
                    <label htmlFor="" className="data">
                      Data
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="data__input"
                      placeholder="Saida"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="data__input__saida"
                      placeholder="Hora"
                    />
                  </div>
                </div>
                <Link to={`/carros/${localDeRetirada}`} className="link">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#FA503F',
                      ml: 1,
                      mt: 0.8,
                      width: '90%',
                      height: 48,
                      minWidth: 125,
                      pl: 4,
                      borderRadius: 8,
                      pr: 6,
                    }}
                  >
                    <SearchIcon className="Busca__svg" />
                    Buscar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="ordenador">
              <h3>Ordenar por</h3>
              <select name="" id="">
                <option value="Recomendado">Recomendado</option>
                <option value="Recomendado">Menor Preço</option>
                <option value="Recomendado">Melhor pontuação</option>
              </select>
            </div>
            <hr />
            <div className="locadoras">
              <h3>Locadoras</h3>
              <FormGroup>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Todas locadoras"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Todas locadoras"
                    control={<Radio />}
                    label="Todas locadoras"
                  />
                  <FormControlLabel
                    value="Movida"
                    control={<Radio />}
                    label="Movida"
                  />
                  <FormControlLabel
                    value="Localiza"
                    control={<Radio />}
                    label="Localiza"
                  />
                </RadioGroup>
              </FormGroup>
            </div>
            <hr />
            <div className="quantidadedepessoas">
              <h3>Quantidade de pessoas</h3>
              <FormGroup>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Todas as opções"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Todas as opções"
                    control={<Radio />}
                    label="Todas as opções"
                  />
                  <FormControlLabel
                    value="2 Pessoas"
                    control={<Radio />}
                    label="2 Pessoas"
                  />
                  <FormControlLabel
                    value="3 Pessoas"
                    control={<Radio />}
                    label="3 Pessoas"
                  />
                  <FormControlLabel
                    value="5 Pessoas"
                    control={<Radio />}
                    label="5 Pessoas"
                  />
                  <FormControlLabel
                    value="7 Pessoas"
                    control={<Radio />}
                    label="7 Pessoas"
                  />
                </RadioGroup>
              </FormGroup>
            </div>
          </div>
          <div>
            <CardCarros carros={carros} />
          </div>
        </div>
      </CarrosBox>
      <Footer />
    </div>
  );
};

export default PageCarros;
