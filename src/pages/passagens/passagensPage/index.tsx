import NavBarComponent from '../../../componentes/navbar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { InputClassePessoas, PassagensBox } from './passagensPagestyled';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import CardPassagens from '../../../componentes/CardPassagens';
import { IPassagens } from '../../../interfaces/IPassagens';
import Footer from '../../../componentes/Footer';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface valor {
  minimo: number;
}

const PagePassagens = () => {
  const [passagens, setPassagens] = useState<IPassagens[]>();
  const [origem, setOrigem] = useState<string>();
  const [destino, setDestino] = useState<string>();
  const [dezembro, setDezembro] = useState<valor[] | undefined>();
  const [janeiro, setJaneiro] = useState<valor[] | undefined>();
  const [fevereiro, setFevereiro] = useState<valor[] | undefined>();
  const [setembro, setSetembro] = useState<valor[] | undefined>();
  const [outubro, setOutubro] = useState<valor[] | undefined>();
  const [novembro, setNovembro] = useState<valor[] | undefined>();
  const [openSetembro, setOpenSetembro] = useState(false);
  const [openOutubro, setOpenOutubro] = useState(false);
  const [openNovembro, setOpenNovembro] = useState(false);
  const [openDezembro, setOpenDezembro] = useState(false);
  const [openJaneiro, setOpenJaneiro] = useState(false);
  const [openFevereiro, setOpenFevereiro] = useState(false);
  const parametros = useParams();
  useEffect(() => {
    if (parametros.dataIda && parametros.dataVolta) {
      axios
        .get(
          `http://localhost:8080/viagens?destino=${parametros.destino}&origem=${parametros.origem}&data=${parametros.dataIda}&dataVolta=${parametros.dataVolta}`
        )
        .then((resposta) => setPassagens(resposta.data.viagens));
    } else {
      axios
        .get(
          `http://localhost:8080/viagens?destino=${parametros.destino}&origem=${parametros.origem}`
        )
        .then((resposta) => setPassagens(resposta.data.viagens));
    }
    axios.get(`http://localhost:8080/viagens/relatorio`).then((resposta) => {
      setDezembro(resposta.data.dezembro[0]);
      setJaneiro(resposta.data.janeiro[0]);
      setFevereiro(resposta.data.fevereiro[0]);
      setSetembro(resposta.data.setembro[0]);
      setOutubro(resposta.data.outubro[0]);
      setNovembro(resposta.data.novembro[0]);
    });
  }, [parametros]);
  return (
    <div>
      <div>
        <NavBarComponent passagens={true} />
      </div>
      <PassagensBox>
        <h1>Passagens</h1>

        <div className="container__grid">
          <div>
            <div className="pesquisa">
              <h3>Passagens</h3>
              <div className="div__local">
                <LocationOnOutlinedIcon className="icone" />
                <label htmlFor="" className="label__local">
                  Origem
                </label>
                <input
                  type="text"
                  className="input__local"
                  placeholder="Origem"
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                />
                <div className="div__local">
                  <LocationOnOutlinedIcon className="icone" />
                  <label htmlFor="" className="label__local">
                    Destino
                  </label>
                  <input
                    type="text"
                    className="input__local"
                    placeholder="Destino"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                  />
                </div>
                <div>
                  <div className="div_data">
                    <CalendarMonthIcon />
                    <label htmlFor="" className="data">
                      Data Ida
                    </label>
                    <input
                      type="date"
                      name=""
                      id=""
                      className="data__input"
                      placeholder="Ida"
                    />
                    <label htmlFor="" className=" data__volta ">
                      Data Volta
                    </label>
                    <input
                      type="date"
                      name=""
                      id=""
                      className="data__input data__input__saida"
                      placeholder="Volta"
                    />
                  </div>
                </div>
                <InputClassePessoas>
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
                      className=" Quartos__input "
                    />
                    <PersonIcon className="Pessoas__svg" />
                    <label htmlFor="" className="Pessoas__label">
                      Pessoas
                    </label>
                    <input
                      type="text"
                      defaultValue={2}
                      className="Pessoas__input"
                    />
                  </div>
                </InputClassePessoas>
                <Link to={`/passagens/${destino}/${origem}`} className="link ">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#FA503F',
                      ml: 1,
                      mt: 5,
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

            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: '#eeeeee' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => setOpenSetembro(!openSetembro)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Setembro 2022"
                  secondary={`Valores apartir ${
                    setembro
                      ? setembro.length > 0
                        ? setembro[0].minimo.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                        : 'R$ 0'
                      : 'R$ 0'
                  }`}
                />
                {openSetembro ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSetembro} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <FormControl sx={{ pl: 8 }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todas as opções"
                        control={<Radio />}
                        label="Todas as opções"
                      />
                      <FormControlLabel
                        value="2 da.semana"
                        control={<Radio />}
                        label="2 da.semana"
                      />
                      <FormControlLabel
                        value="3 da.semana"
                        control={<Radio />}
                        label="3 da.semana"
                      />
                      <FormControlLabel
                        value="4 da.semana"
                        control={<Radio />}
                        label="4 da.semana"
                      />
                      <FormControlLabel
                        value="5 da.semana"
                        control={<Radio />}
                        label="5 da.semana"
                      />
                    </RadioGroup>
                  </FormControl>
                </List>
              </Collapse>
              <hr />
              <ListItemButton onClick={() => setOpenOutubro(!openOutubro)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Outubro 2022"
                  secondary={`Valores apartir ${
                    outubro
                      ? outubro.length > 0
                        ? outubro[0].minimo.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                        : 'R$ 0'
                      : 'R$ 0'
                  }`}
                />
                {openOutubro ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openOutubro} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <FormControl sx={{ pl: 8 }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todas as opções"
                        control={<Radio />}
                        label="Todas as opções"
                      />
                      <FormControlLabel
                        value="2 da.semana"
                        control={<Radio />}
                        label="2 da.semana"
                      />
                      <FormControlLabel
                        value="3 da.semana"
                        control={<Radio />}
                        label="3 da.semana"
                      />
                      <FormControlLabel
                        value="4 da.semana"
                        control={<Radio />}
                        label="4 da.semana"
                      />
                      <FormControlLabel
                        value="5 da.semana"
                        control={<Radio />}
                        label="5 da.semana"
                      />
                    </RadioGroup>
                  </FormControl>
                </List>
              </Collapse>
              <hr />
              <ListItemButton onClick={() => setOpenNovembro(!openNovembro)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Novembro 2022"
                  secondary={`Valores apartir ${
                    novembro
                      ? novembro.length > 0
                        ? novembro[0].minimo.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                        : 'R$ 0'
                      : 'R$ 0'
                  }`}
                />
                {openNovembro ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNovembro} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <FormControl sx={{ pl: 8 }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todas as opções"
                        control={<Radio />}
                        label="Todas as opções"
                      />
                      <FormControlLabel
                        value="2 da.semana"
                        control={<Radio />}
                        label="2 da.semana"
                      />
                      <FormControlLabel
                        value="3 da.semana"
                        control={<Radio />}
                        label="3 da.semana"
                      />
                      <FormControlLabel
                        value="4 da.semana"
                        control={<Radio />}
                        label="4 da.semana"
                      />
                      <FormControlLabel
                        value="5 da.semana"
                        control={<Radio />}
                        label="5 da.semana"
                      />
                    </RadioGroup>
                  </FormControl>
                </List>
              </Collapse>
              <hr />
              <ListItemButton onClick={() => setOpenDezembro(!openDezembro)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Dezembro 2022"
                  secondary={`Valores apartir ${
                    dezembro
                      ? dezembro.length > 0
                        ? dezembro[0].minimo.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                        : 'R$ 0'
                      : 'R$ 0'
                  }`}
                />
                {openDezembro ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openDezembro} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <FormControl sx={{ pl: 8 }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todas as opções"
                        control={<Radio />}
                        label="Todas as opções"
                      />
                      <FormControlLabel
                        value="2 da.semana"
                        control={<Radio />}
                        label="2 da.semana"
                      />
                      <FormControlLabel
                        value="3 da.semana"
                        control={<Radio />}
                        label="3 da.semana"
                      />
                      <FormControlLabel
                        value="4 da.semana"
                        control={<Radio />}
                        label="4 da.semana"
                      />
                      <FormControlLabel
                        value="5 da.semana"
                        control={<Radio />}
                        label="5 da.semana"
                      />
                    </RadioGroup>
                  </FormControl>
                </List>
              </Collapse>
              <hr />
              <ListItemButton onClick={() => setOpenJaneiro(!openJaneiro)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Janeiro 2022"
                  secondary={`Valores apartir ${
                    janeiro
                      ? janeiro.length > 0
                        ? janeiro[0].minimo.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                        : 'R$ 0'
                      : 'R$ 0'
                  }`}
                />
                {openJaneiro ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openJaneiro} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <FormControl sx={{ pl: 8 }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todas as opções"
                        control={<Radio />}
                        label="Todas as opções"
                      />
                      <FormControlLabel
                        value="2 da.semana"
                        control={<Radio />}
                        label="2 da.semana"
                      />
                      <FormControlLabel
                        value="3 da.semana"
                        control={<Radio />}
                        label="3 da.semana"
                      />
                      <FormControlLabel
                        value="4 da.semana"
                        control={<Radio />}
                        label="4 da.semana"
                      />
                      <FormControlLabel
                        value="5 da.semana"
                        control={<Radio />}
                        label="5 da.semana"
                      />
                    </RadioGroup>
                  </FormControl>
                </List>
              </Collapse>
              <hr />
              <ListItemButton onClick={() => setOpenFevereiro(!openFevereiro)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Fevereiro 2022"
                  secondary={`Valores apartir ${
                    fevereiro
                      ? fevereiro.length > 0
                        ? fevereiro[0].minimo.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })
                        : 'R$ 0'
                      : 'R$ 0'
                  }`}
                />
                {openFevereiro ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openFevereiro} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <FormControl sx={{ pl: 8 }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todas as opções"
                        control={<Radio />}
                        label="Todas as opções"
                      />
                      <FormControlLabel
                        value="2 da.semana"
                        control={<Radio />}
                        label="2 da.semana"
                      />
                      <FormControlLabel
                        value="3 da.semana"
                        control={<Radio />}
                        label="3 da.semana"
                      />
                      <FormControlLabel
                        value="4 da.semana"
                        control={<Radio />}
                        label="4 da.semana"
                      />
                      <FormControlLabel
                        value="5 da.semana"
                        control={<Radio />}
                        label="5 da.semana"
                      />
                    </RadioGroup>
                  </FormControl>
                </List>
              </Collapse>
              <hr />
            </List>
          </div>
          <div>
            <CardPassagens passagens={passagens} />
          </div>
        </div>
      </PassagensBox>
      <Footer />
    </div>
  );
};

export default PagePassagens;
