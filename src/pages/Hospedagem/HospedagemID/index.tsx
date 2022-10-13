import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarComponent from '../../../componentes/navbar';
import IHospedagem from '../../../interfaces/IHospedagens';
import { BackGrounImage, HospedagemIdContainer } from './styledHospedagemId';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Paper } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PoolIcon from '@mui/icons-material/Pool';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

import QuartosCarroseul from '../../../componentes/QuartosCarrosel';
import { CardQuartosBox } from '../../../componentes/QuartosCarrosel/StyledCardQuartos';
import CarroseulInfosUteis from '../../../componentes/InfosUteis';
import Footer from '../../../componentes/Footer';
const HospedagemId = () => {
  const [hospedagem, setHospedagem] = useState<IHospedagem | undefined>();
  const parametros = useParams();
  console.log(hospedagem);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/hospedagem/${parametros.id}`)
      .then((resposta) => setHospedagem(resposta.data.hospedagem));
  }, []);
  return (
    <div>
      <div>
        <NavBarComponent hospedagem={true} />
      </div>
      <BackGrounImage
        backGround={hospedagem?.imagem ? hospedagem?.imagem : ' '}
      >
        <div className="card__container">
          <div className="card__informaçõesGerais">
            <div className="card__border">
              <div className="estrelas">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className="titulo">
                <h1>{hospedagem?.nome}</h1>
              </div>
              <div className="localizacao">
                <LocationOnIcon />
                {hospedagem?.localizacao}. A{' '}
                {hospedagem?.distanciadocentro.toFixed(2)} km do centro
              </div>
              <div className="avaliacaoContainers">
                <div className="avaliacao">
                  {hospedagem?.avaliacao.toFixed(1)}
                </div>
                <div>
                  <h2 className="classificacao">Confortável</h2>
                  <p>
                    Classificação aspecto geral. Baseado em{' '}
                    {hospedagem?.comentarios} comentários
                  </p>
                </div>
              </div>
            </div>
            <div className="preco">
              R${hospedagem?.preco}
              <p className="dataRef">
                Data de referência{' '}
                <strong>
                  {new Date(
                    hospedagem?.dataRef ? hospedagem.dataRef : ''
                  ).toLocaleDateString('pt-br', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </strong>
              </p>
              <div className="button__border">
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    borderRadius: 24,
                    textTransform: 'none',
                    color: '#fff',
                    bgcolor: '#4300D2',
                    fontWeight: 'bold',
                    height: 48,
                  }}
                >
                  Escolher datas
                </Button>
              </div>
              <p className="formaDePagamento">
                Parcele com o cartão de crédito
              </p>
            </div>
          </div>
        </div>
      </BackGrounImage>
      <HospedagemIdContainer>
        <div className="navbar">
          <ul className="navbar__lista">
            <li>
              <a href="" className="link">
                Serviços
              </a>
            </li>
            <li>
              <a href="" className="link">
                Resumo
              </a>
            </li>
            <li>
              <a href="" className="link">
                Fotos
              </a>
            </li>
            <li>
              <a href="" className="link">
                Quartos
              </a>
            </li>
            <li>
              <a href="" className="link">
                Comentarios
              </a>
            </li>
            <li>
              <a href="" className="link">
                Mais serviços
              </a>
            </li>
            <li>
              <a href="" className="link">
                Recomendações
              </a>
            </li>
            <li>
              <a href="" className="link">
                Pergunstas Frequentes
              </a>
            </li>
          </ul>
        </div>
        <div className="caminho">
          <p>
            Hospedagens <KeyboardArrowRightIcon /> Hospedagens em{' '}
            {hospedagem?.localizacao}
          </p>
        </div>
        <div className="card__servicos">
          <Paper elevation={6} sx={{ borderRadius: 4, px: 6, py: 2 }}>
            <h2 className="titulo">A hospedagem oferece</h2>
            <div className="servicos">
              <AcUnitIcon />
              <p>Ar-condicionado nas areas comuns</p>
              <PoolIcon />
              <p>Piscina</p>
              <WifiIcon />
              <p>Wifi</p>
              <FitnessCenterIcon />
              <p>Academia</p>
            </div>
          </Paper>
          <div className="sobre__container">
            <div className="imagem__container">
              <img src={hospedagem?.imagens[0].imagem} alt="" />
            </div>
            <div className="sobre__conteudo">
              <h2 className="sobre__conteudo__titulo">
                Sobre {hospedagem?.nome}
              </h2>
              <p className="sobre__conteudo__texto">{hospedagem?.sobre}</p>
            </div>
          </div>
          <div className="fotos__container">
            <div className="fotos__container__titulo">
              <h2 className="fotos__container__titulo">
                {hospedagem?.nome} : Fotos
              </h2>
            </div>
            <div className="fotos">
              {hospedagem?.imagens.slice(1, 8).map((imagem, index) => (
                <img
                  src={imagem.imagem}
                  alt={`${imagem.id}`}
                  key={imagem.id}
                  className={`foto__${index}`}
                />
              ))}
            </div>
          </div>
          <div className="quartos__container">
            <div className="quartos__container__titulo">
              <h2 className="quartos__container__titulo">
                Quartos de {hospedagem?.nome}
              </h2>
            </div>
            <QuartosCarroseul quartos={hospedagem?.quartos} />
          </div>
          <div>
            <Paper elevation={6} sx={{ borderRadius: 4, px: 6, py: 2 }}>
              <h2 className="titulo__condicoesHospedagem">
                Condições de hospedagem
              </h2>
              <div className="condicoesHospedagem">
                <div>
                  <ul>
                    <li className="condicoesHospedagem__titulo">
                      <strong>Horario</strong>
                    </li>
                    <li>
                      <TaskAltIcon />
                      Horário de Check in: de 14:00 às 11:30
                    </li>
                    <li>
                      <RemoveDoneIcon />
                      Horário de Check out: 12:00
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="condicoesHospedagem__titulo">
                      <strong>Café da manhã</strong>
                    </li>
                    <li>De 06:00 ás 10:00</li>
                  </ul>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper elevation={6} sx={{ borderRadius: 4, px: 6, py: 2, my: 12 }}>
              <h2 className="titulo__condicoesHospedagem">
                Higiene e segurança
              </h2>
              <div className="higieneSeguranca">
                <div>
                  <ul>
                    <li>Medição de temperatura</li>
                    <li>Cumpre com os protocolos sanitários do governo</li>
                    <li>Álcool em gel nas áreas comuns</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Os funcionários usam máscaras</li>
                    <li>Intervalo de desinfecção entre hospedagens</li>
                    <li>Desinfecção das áreas comuns</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Distanciamento social nas áreas comuns</li>
                    <li>Opções de comida embalada</li>
                  </ul>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <h2 className="titulo">
              Informações úteis sobre {hospedagem?.nome}
            </h2>
            <CarroseulInfosUteis infos={hospedagem} />
          </div>
        </div>
      </HospedagemIdContainer>
      <Footer />
    </div>
  );
};

export default HospedagemId;
