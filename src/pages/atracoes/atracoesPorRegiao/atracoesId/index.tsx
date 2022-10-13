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
import { Button, TextField } from '@mui/material';
import OpcoesCardAtracoes from '../../../../componentes/OpcoesCardAtracoes';
import CloseIcon from '@mui/icons-material/Close';

const transformaEmArray = (quantidadeDeDias: number | undefined) => {
  const array: number[] = [];
  if (quantidadeDeDias) {
    for (let index = 0; index < quantidadeDeDias; index++) {
      array.push(index);
    }
  }
  return array;
};

const AtracoesId = () => {
  const [atracao, setAtracao] = useState<IAtracoes | undefined>();
  const parametros = useParams();
  const arrayQuantidadeDeDias = transformaEmArray(atracao?.quantidadeDeDias);
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
              <AccessTimeIcon /> Duração : {atracao?.duracao}
            </p>
            <div className="beneficios__container">
              <div className="beneficios">
                <DirectionsBusIcon />
                <p>Transfer saindo do hotel</p>
              </div>
              <div className="beneficios">
                <LocalActivityIcon />
                <p>Voucher eletrônico!</p>
              </div>
            </div>
          </div>
          <div className="preco__container">
            <div className="preco__box">
              <div className=" preco__border">
                <div className="preco__ajuste">
                  <p>Preço por adulto a partir de</p>
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
                    Ver opções
                  </Button>
                </div>
              </div>
              <div className="preco__box__display__pontos">
                <img
                  src="https://www.staticontent.com/eva-core/assets/logos/0.0.1/loyalty-logo.svg"
                  alt=""
                />
                <p>
                  Você ganha <strong> {atracao?.preco} pontos</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="descricao">
          <div className="descricao__container">
            <h2>Descrição </h2>
            <p>{atracao?.descricao}</p>
          </div>
        </div>
        <AtracaoOpcoesBox>
          <div className="opcoes__container">
            <h2>Confira as opções desta atração e escolha a sua!</h2>

            {arrayQuantidadeDeDias?.map((item: number) => (
              <OpcoesCardAtracoes
                atracao={atracao}
                arrayQuantidadeDeDias={item}
                key={item}
              />
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
                    Guia: Português e Espanhol
                  </li>
                </ul>
              </div>
              <div className="SaberAntesDeComprar__displayLista">
                <h6>O que não inclui?</h6>
                <ul className="SaberAntesDeComprar__lista">
                  <li>
                    <CloseIcon />
                    Refeições: comidas
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
                Política de cancelamento
              </h6>

              <p>
                Cancele gratuitamente a reserva desta atração até 1 dia antes de
                usá-la. Você poderá rever as opções de alterações e
                cancelamentos disponíveis em Minhas Viagens.
              </p>
            </div>
            <div className="SaberAntesDeComprar__display center">
              <h6 className="SaberAntesDeComprar__Politica__title">
                Antes de participar
              </h6>

              <p>
                Para realizar essa atração, você só precisa apresentar o seu
                documento de identificação.
              </p>
            </div>
            <div className="SaberAntesDeComprar__display center">
              <div className="SaberAntesDeComprar__displayLista">
                <h6 className="SaberAntesDeComprar__Politica__title">
                  Informação geral
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
    </div>
  );
};

export default AtracoesId;
