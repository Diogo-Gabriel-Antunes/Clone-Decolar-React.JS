import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavBarComponent from '../../../../componentes/navbar';
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
import KingBedIcon from '@mui/icons-material/KingBed';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QuartosCarroseul from '../../../../componentes/QuartosCarrosel';
import CarroseulInfosUteis from '../../../../componentes/InfosUteis';
import Footer from '../../../../componentes/Footer';
import {
  BackGrounImage,
  HospedagemIdContainer,
} from '../../../Hospedagem/HospedagemID/styledHospedagemId';
import ICasaAlugueis from '../../../../interfaces/ICasaAlugueis';
import { IQuartos } from '../../../../interfaces/IQuartos';
import CardReservaHospedagem from '../../../../componentes/hospedagem/FormularioHospedagem/CardReservaHospedagem';
const CasaId = () => {
  const [casa, setCasa] = useState<ICasaAlugueis | undefined>();
  const [hospedagemSelecionada, setHospedagemSelecionada] = useState<
    [IQuartos | undefined, string] | undefined
  >();
  const parametros = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/alugueiscasa/${parametros.id}`)
      .then((resposta) => setCasa(resposta.data.AlugueisCasa));
  }, []);
  return (
    <div>
      <div>
        <NavBarComponent />
      </div>
      <BackGrounImage backGround={casa?.imagem ? casa?.imagem : ' '}>
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
                <h1>{casa?.nome}</h1>
              </div>
              <div className="localizacao">
                <LocationOnIcon />
                {casa?.destino}. A {casa?.distanciadocentro.toFixed(2)} km do
                centro
              </div>
              <div className="avaliacaoContainers">
                <div className="avaliacao">{casa?.avaliacao.toFixed(1)}</div>
                <div>
                  <h2 className="classificacao">Confortável</h2>
                  <p>
                    Classificação aspecto geral. Baseado em {122} comentários
                  </p>
                </div>
              </div>
            </div>
            <div className="preco">
              R${casa?.preco}
              <p className="dataRef">
                Data de referência{' '}
                <strong>
                  {new Date(
                    casa?.createdAt ? casa.createdAt : ''
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
                  <a href="#reserva" className="link">
                    Escolher datas
                  </a>
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
            {casa?.destino}
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
              <img src={casa?.imagens[0].imagem} alt="" />
            </div>
            <div className="sobre__conteudo">
              <h2 className="sobre__conteudo__titulo">Sobre {casa?.nome}</h2>
              <p className="sobre__conteudo__texto">{casa?.sobre}</p>
            </div>
          </div>
          <div className="fotos__container">
            <div className="fotos__container__titulo">
              <h2 className="fotos__container__titulo">{casa?.nome} : Fotos</h2>
            </div>
            <div className="fotos">
              {casa?.imagens.slice(0, 7).map((imagem, index) => (
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
                Quartos de {casa?.nome}
              </h2>
            </div>
            <QuartosCarroseul quartos={casa?.quartos} />
          </div>
          <div>
            <Paper elevation={6} sx={{ borderRadius: 4, px: 6, py: 2 }}>
              <h2 className="titulo__condicoesHospedagem">
                Condições de Aluguel
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
            <h2 className="titulo">Informações úteis sobre {casa?.nome}</h2>
            <CarroseulInfosUteis infos={casa} />
          </div>
          <div className="reserva" id="reserva">
            <div>
              <h2 className="titulo">Reserva</h2>

              {casa?.quartos.slice(0, 3).map((item, index) => (
                <CardReservaHospedagem
                  selecionador={setHospedagemSelecionada}
                  quarto={item}
                  key={index}
                />
              ))}
            </div>

            <Paper className="pagamento__container">
              <p className="pagamento__containerQtdNoites">
                1 noite, 2 Pessoas
              </p>
              <div className="pagamento__container__valor">
                <p className="pagamento__container__cifrao">R$</p>
                {hospedagemSelecionada ? (
                  <p className="pagamento__container__preco">
                    {hospedagemSelecionada[0]?.preco.toLocaleString()}
                  </p>
                ) : (
                  ''
                )}
              </div>
              <div className="pagamento__container__impostos">
                <p>Imposto inclusos</p>
              </div>
              <div className="pagamento__container__button">
                <Link
                  to={`quarto/${
                    hospedagemSelecionada
                      ? hospedagemSelecionada[0]
                        ? hospedagemSelecionada[0].id
                        : ''
                      : ''
                  }`}
                  className="link"
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 24,
                      bgcolor: '#fa503f',
                      width: 208,
                    }}
                  >
                    Reservar agora
                  </Button>
                </Link>
              </div>
              <div className="formaDePagamento__container">
                <div className="formaDePagamento">
                  {hospedagemSelecionada ? (
                    hospedagemSelecionada[1] === 'Pague para a hospedagem' ? (
                      hospedagemSelecionada ? (
                        <KingBedIcon />
                      ) : (
                        ''
                      )
                    ) : (
                      <CreditCardIcon />
                    )
                  ) : (
                    ''
                  )}

                  <p>
                    {hospedagemSelecionada
                      ? hospedagemSelecionada[1] === 'Pague para a hospedagem'
                        ? hospedagemSelecionada
                          ? hospedagemSelecionada[1]
                          : ''
                        : 'Em até 6x sem juros'
                      : ''}
                  </p>
                </div>
                <p className="formaDePagamento__descricao">
                  {hospedagemSelecionada
                    ? hospedagemSelecionada[1] === 'Pague para a hospedagem'
                      ? hospedagemSelecionada
                        ? 'A hospedagem é responsável por realizar a cobrança. Pagamento em reais.'
                        : ''
                      : 'Em até 6x sem juros'
                    : ''}
                </p>
              </div>
              <div className="infosReserva__Container">
                <h5>Informação da sua reserva</h5>
                <div>
                  <TaskAltIcon /> Quarto superior
                </div>
                <div>
                  <TaskAltIcon /> Café da manha
                </div>
                <div>
                  <RemoveDoneIcon className="infosReserva__naocontem" /> Não
                  permite realizar alteração ou cancelmentos
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </HospedagemIdContainer>
      <Footer />
    </div>
  );
};

export default CasaId;
