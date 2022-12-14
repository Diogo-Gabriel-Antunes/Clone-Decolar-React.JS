import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarComponent from '../../../../componentes/navbar';
import IAtracoes from '../../../../interfaces/IAtracoes';
import {
  AtracaoOpcoesBox,
  AtracaoSaberAntesDeComprarBox,
  AtracoesIdBox,
} from './StyledAtracoesId';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../../../../componentes/Footer';
import OpcoesCardAtracoes from '../../../../componentes/atracoes/OpcoesCardAtracoes';

const AtracoesId = () => {
  const [atracao, setAtracao] = useState<IAtracoes | undefined>();
  const parametros = useParams();
  console.log(atracao);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/atracoes/${parametros.id}`)
      .then((resposta) => setAtracao(resposta.data.atracoes));
  }, []),
    [];
  return (
    <div>
      <div>
        <NavBarComponent passeios={true} />
      </div>
      <AtracoesIdBox>
        <div className="caminho">
          <p>
            Decolar
            <KeyboardArrowRightIcon />
            Passeios
            <KeyboardArrowRightIcon />
            Passeios em {atracao?.local} <KeyboardArrowRightIcon />{' '}
            {atracao?.nome}
          </p>
        </div>
        <div className="galeria">
          {atracao?.imagens.slice(0, 4).map((imagem, index) => (
            <img
              src={imagem.imagem}
              alt={atracao.nome}
              key={imagem.id}
              className={`foto__${index}`}
            />
          ))}
        </div>
        <div className="infosAtracao">
          <div className="infos">
            <h1 className="infos__titulo">{atracao?.nome}</h1>
            <p className="infos__paragrafo">
              <AccessTimeIcon /> Dura????o : {atracao?.duracao}
            </p>
            <div className="beneficios__container">
              <div className="beneficios">
                <DirectionsBusIcon />
                <p>Transfer saindo do hotel</p>
              </div>
              <div className="beneficios">
                <LocalActivityIcon />
                <p>Voucher eletr??nico!</p>
              </div>
            </div>
          </div>
          <div className="preco__container">
            <div className="preco__box">
              <div className=" preco__border">
                <div className="preco__ajuste">
                  <p>Pre??o por adulto a partir de</p>
                  <div className="preco__box__display">
                    <p className="preco__box__cifrao">R$</p>
                    <p className="preco__box__valor"> {atracao?.preco}</p>
                  </div>
                  <p>Inclui impostos e taxas</p>
                  <Button
                    variant="contained"
                    sx={{
                      width: 254,
                      height: 36,
                      mx: 2,
                      bgcolor: '#4300D2',
                      borderRadius: 24,
                      my: 2,
                    }}
                  >
                    <a href="#opcoes" className="link">
                      Ver op????es
                    </a>
                  </Button>
                </div>
              </div>
              <div className="preco__box__display__pontos">
                <img
                  src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
                  alt=""
                />
                <p>
                  Voc?? ganha <strong> {atracao?.preco} pontos</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="descricao">
          <div className="descricao__container">
            <h2>Descri????o </h2>
            <p>{atracao?.descricao}</p>
          </div>
        </div>
        <AtracaoOpcoesBox>
          <div className="opcoes__container" id="opcoes">
            <h2>Confira as op????es desta atra????o e escolha a sua!</h2>

            {atracao?.opcoes.map((item, index) => (
              <OpcoesCardAtracoes opcoes={item} atracao={atracao} key={index} />
            ))}
          </div>
        </AtracaoOpcoesBox>
        <AtracaoSaberAntesDeComprarBox>
          <div className="SaberAntesDeComprar__container">
            <h2>O que saber antes de comprar</h2>
            <div className="SaberAntesDeComprar__display">
              <div className="SaberAntesDeComprar__displayLista">
                <h6>O que inclui?</h6>
                <ul className="SaberAntesDeComprar__lista">
                  <li>
                    <CheckIcon className="check" />
                    Guia: Portugu??s e Espanhol
                  </li>
                </ul>
              </div>
              <div className="SaberAntesDeComprar__displayLista">
                <h6>O que n??o inclui?</h6>
                <ul className="SaberAntesDeComprar__lista">
                  <li>
                    <CloseIcon />
                    Refei????es: comidas
                  </li>
                  <li>
                    <CloseIcon />
                    Bebidas: bebidas
                  </li>
                  <li>
                    <CloseIcon />
                    Ingressos: ingresso ao Parque Beto Carrero World
                  </li>
                </ul>
              </div>
            </div>
            <div className="SaberAntesDeComprar__display center">
              <h6 className="SaberAntesDeComprar__Politica__title">
                Pol??tica de cancelamento
              </h6>

              <p>
                Cancele gratuitamente a reserva desta atra????o at?? 1 dia antes de
                us??-la. Voc?? poder?? rever as op????es de altera????es e
                cancelamentos dispon??veis em Minhas Viagens.
              </p>
            </div>
            <div className="SaberAntesDeComprar__display center">
              <h6 className="SaberAntesDeComprar__Politica__title">
                Antes de participar
              </h6>

              <p>
                Para realizar essa atra????o, voc?? s?? precisa apresentar o seu
                documento de identifica????o.
              </p>
            </div>
            <div className="SaberAntesDeComprar__display center">
              <div className="SaberAntesDeComprar__displayLista">
                <h6 className="SaberAntesDeComprar__Politica__title">
                  Informa????o geral
                </h6>

                <ul className="SaberAntesDeComprar__lista">
                  <li>traslado hotel/Parque Beto Carrero World/hotel</li>
                  <li>Saida para passageiros hospedados em Bal. Camboriu</li>
                </ul>
              </div>
            </div>
          </div>
        </AtracaoSaberAntesDeComprarBox>
      </AtracoesIdBox>
      <Footer />
    </div>
  );
};

export default AtracoesId;
