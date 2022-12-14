import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import NavBarComponent from '../../../componentes/navbar';
import { AtracoesPorRegiÃ£oBox } from './styledAtracoesPorRegiao';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useEffect, useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

import axios from 'axios';
import CardAtracoes from '../../../componentes/atracoes/cardAtracoes';
import IAtracoes from '../../../interfaces/IAtracoes';
import Footer from '../../../componentes/Footer';
import FormularioAtracoes from '../../../componentes/atracoes/FormularioPasseios';

const AtracoesPorRegiao = () => {
  const parametros = useParams();
  const [ida, setIda] = useState<Dayjs | null>();
  const [volta, setVolta] = useState<Dayjs | null>();
  const [categorias, setCategorias] = useState<string | undefined>('');
  const [preco, setPreco] = useState<string | undefined>('');
  const [MaisRelevante, setMaisRelevante] = useState<string | undefined>('');
  const [atracoes, setAtracoes] = useState<IAtracoes[]>();
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/atracoes?destino=${parametros.destino}`)
      .then((resposta) => setAtracoes(resposta.data.atracoes));
  }, [parametros]);
  return (
    <div>
      <div>
        <NavBarComponent passeios={true} />
      </div>
      <AtracoesPorRegiÃ£oBox>
        {ativo ? (
          <>
            <FormularioAtracoes onView={setAtivo} />
          </>
        ) : (
          <>
            <div className="localizacao">
              <div className="localizacao__container">
                <LocationOnOutlinedIcon />
                <p>{parametros.destino} |</p>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#FA503F',
                    ml: 2,
                    mt: 0.8,
                    width: 50,
                    height: 32,
                    minWidth: 100,
                    pl: 2,
                    borderRadius: 8,
                    textTransform: 'none',
                  }}
                  onClick={() => setAtivo(true)}
                >
                  <SearchIcon className="Busca__svg" />
                  Editar
                </Button>
              </div>
            </div>
          </>
        )}

        <div className="CaminhoPercorrido">
          <p>
            Decolar : Passeios :{' '}
            <strong>Passeios em {parametros.destino}</strong>
          </p>
        </div>
        <div className="Formulario">
          <div className="Formulario__container">
            <label htmlFor="" className="labelViagem">
              Insira sua data de viagem
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Ida"
                value={ida}
                minDate={dayjs('2017-01-01')}
                onChange={(newValue: Dayjs | null) => {
                  setIda(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="Volta"
                value={volta}
                minDate={dayjs('2017-01-01')}
                onChange={(newValue: Dayjs | null) => {
                  setVolta(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} sx={{ ml: 4 }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="pesquisa">
            <ConfirmationNumberIcon sx={{ color: '#270570' }} />
            <input type="text" placeholder="destino" />
            <Link to={`/passeios/`} className="Link">
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#fff',
                  border: '1px solid #4300d2',
                  ml: 2,
                  mt: 0.8,
                  width: 14,
                  height: 24,
                  minWidth: 14,
                  pl: 2,
                  borderRadius: 8,
                }}
              >
                <SearchIcon className="Busca__svg" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="filtros">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categorias}
              label="Categorias"
              onChange={(e) => setCategorias(e.target.value)}
              sx={{ width: 130, height: 40, paddingBottom: 7, bgcolor: '#fff' }}
            >
              <MenuItem value={'Compras'}>Compras</MenuItem>
              <MenuItem value={'Gastronomia'}>Gastronomia</MenuItem>
              <MenuItem value={'Museus e espaÃ§os culturais'}>
                Museus e espaÃ§os culturais
              </MenuItem>
              <MenuItem value={'Tour e excursÃµes'}>Tour e excursÃµes</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">PreÃ§os</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={preco}
              label="PreÃ§o"
              onChange={(e) => setPreco(e.target.value)}
              sx={{
                width: 130,
                height: 40,
                paddingBottom: 7,
                bgcolor: '#fff',
                pl: 12,
              }}
            >
              <MenuItem value={'AtÃ© R$50'}>AtÃ© R$50</MenuItem>
              <MenuItem value={'AtÃ© R$100'}>AtÃ© R$100</MenuItem>
              <MenuItem value={'AtÃ© R$150'}>AtÃ© R$150</MenuItem>
              <MenuItem value={'AtÃ© R$200'}>AtÃ© R$200</MenuItem>
              <MenuItem value={'AtÃ© R$250'}>AtÃ© R$250</MenuItem>
              <MenuItem value={'AtÃ© R$300'}>AtÃ© R$300</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Mais Relevantes
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={MaisRelevante}
              label="Mais Relevantes"
              onChange={(e) => setMaisRelevante(e.target.value)}
              sx={{ width: 170, height: 40, paddingBottom: 7, bgcolor: '#fff' }}
            >
              <MenuItem value={'PreÃ§o: Maior para o Menor'}>
                PreÃ§o: Maior para o Menor
              </MenuItem>
              <MenuItem value={'PreÃ§o: Menor para o Maior'}>
                PreÃ§o: Menor para o Maior
              </MenuItem>
              <MenuItem value={'PontuaÃ§Ã£o'}>PontuaÃ§Ã£o</MenuItem>
              <MenuItem value={'Mais Relevantes'}>Mais Relevantes</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="titulo__container">
          <h1>
            {' '}
            {atracoes?.length} AtraÃ§Ãµes em {parametros.destino}
          </h1>
          <h2>AtraÃ§Ãµes recomendadas</h2>
        </div>

        <CardAtracoes atracoes={atracoes} />
      </AtracoesPorRegiÃ£oBox>
      <Footer />
    </div>
  );
};

export default AtracoesPorRegiao;
