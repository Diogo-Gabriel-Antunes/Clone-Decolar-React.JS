import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../../componentes/Footer';
import NavBarInterna from '../../componentes/navbar/navbarInterna';
import { payload } from '../../interfaces/Payload';
import {
  MinhasViagensBox,
  MinhasViagensBoxConteudo,
} from './StyledMinhasViagens';
import nookies from 'nookies';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardMinhasViagens from '../../componentes/CardMinhasViagens';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import SearchIcon from '@mui/icons-material/Search';

interface IMinhasViagens {
  dataInicio: string;
  dataFinal: string;
}

function filtraLista(minhasViagens: IMinhasViagens[] | any) {
  const ListaParaFiltrar = [];
  for (let index = 0; index < minhasViagens.length; index++) {
    if (minhasViagens[index]) {
      const viagem = minhasViagens[index];
      for (let i = 0; i < viagem.length; i++) {
        ListaParaFiltrar.push(viagem[i]);
      }
    }
  }
  ListaParaFiltrar.sort((item1, item2) => {
    const data1 = new Date(item1.dataInicio);
    const data2 = new Date(item2.dataInicio);
    return data2.getTime() - data1.getTime();
  });
  return ListaParaFiltrar;
}

const MinhasViagens = () => {
  const [origem, setOrigem] = useState<string>();
  const [destino, setDestino] = useState<string>();
  const [minhasViagens, setMinhasViagens] = useState<any[]>([]);
  let payload: payload | undefined = undefined;

  if (nookies.get(null).TOKEN) {
    payload = jwt_decode(nookies.get(null).TOKEN);
  }
  if (payload) {
    useEffect(() => {
      axios
        .get(`http://localhost:8080/minhasviagens/usuario/${payload?.id}`)
        .then((resposta) => {
          setMinhasViagens([
            ...minhasViagens,
            resposta.data.alugueisCarros[0].length > 0
              ? resposta.data.alugueisCarros[0]
              : null,
            resposta.data.alugueisCasa[0].length > 0
              ? resposta.data.alugueisCasa[0]
              : null,
            resposta.data.atracoes[0].length > 0
              ? resposta.data.atracoes[0]
              : null,
            resposta.data.hospedagem[0].length > 0
              ? resposta.data.hospedagem[0]
              : null,
            resposta.data.viagens[0].length > 0
              ? resposta.data.viagens[0]
              : null,
          ]);
        });
    }, []);
  }

  const listaFiltrada = filtraLista(minhasViagens);

  return (
    <MinhasViagensBox>
      <div className="bgWhite">
        <NavBarInterna />

        <div className="div__titulo">
          <h1 className="titulo">Minhas viagens</h1>
          <p className="subtitulo">
            Encontre aqui tudo que voce precisa para planejar e organizar sua
            viagem
          </p>
        </div>
      </div>
      {listaFiltrada.length == 0 ? (
        <div className="minhasViagens__conteudo">
          <div className="semViagens">
            <p className="titulo">Já escolheu seu próximo destino? </p>
            <p className="subTitulo">
              Aproveite as ofertas em atrações, voos, hospedagens e muito mais.
            </p>
            <Button
              variant="contained"
              sx={{
                width: 248,
                fontSize: 16,
                height: 48,
                bgcolor: '#4300d2',
                borderRadius: 24,
                fontWeight: 550,
              }}
            >
              Planeje sua viagem
            </Button>
          </div>
          <div className="cardCoronaVirus">
            <p className="titulo">Informações sobre coronavirus</p>
            <Link to="" className="coronaVirusLink">
              Ver informação
            </Link>
          </div>
        </div>
      ) : (
        <div className="conteudoContainer">
          <div>
            <CardMinhasViagens minhasViagens={listaFiltrada} />
          </div>
          <div>
            <MinhasViagensBoxConteudo>
              <div className="container__grid">
                <div className="pesquisa">
                  <h3>Minhas Viagens</h3>
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

                    <Link
                      to={`/passagens/${destino}/${origem}`}
                      className="link "
                    >
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
              </div>
            </MinhasViagensBoxConteudo>
          </div>
        </div>
      )}

      <Footer />
    </MinhasViagensBox>
  );
};

export default MinhasViagens;
