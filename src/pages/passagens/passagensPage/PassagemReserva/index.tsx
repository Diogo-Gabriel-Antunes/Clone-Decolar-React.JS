import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormInfosPassagem from '../../../../componentes/CardPassagens/FormQtdPessoas/FormInfos';
import NavBarInterna from '../../../../componentes/navbar/navbarInterna';
import { IViagens } from '../../../../interfaces/IViagens';
import { PassagemIdBox } from './StyledPassagemId';
import TodayIcon from '@mui/icons-material/Today';
import GroupIcon from '@mui/icons-material/Group';
import { Button } from '@mui/material';
import DetalhesDoPagamento from '../../../../componentes/CardPassagens/DetalhesDoPagamento';
import nookies from 'nookies';
import jwt_decode from 'jwt-decode';
import { payload } from '../../../../interfaces/Payload';
const PassagemReserva = () => {
  const [viagem, setViagem] = useState<IViagens>();
  const [pessoas, setPessoas] = useState([
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
    {
      nome: '',
      sobrenome: '',
      CPF: '',
      paisResidencia: '',
      tipoDocumento: '',
    },
  ]);
  const { id, qtdpessoas } = useParams();
  const navigate = useNavigate();
  let payload: payload | undefined = undefined;

  if (nookies.get(null).TOKEN) {
    payload = jwt_decode(nookies.get(null).TOKEN);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/viagem/${id}`)
      .then((resposta) => setViagem(resposta.data.viagem));
  }, []);
  return (
    <PassagemIdBox>
      <div>
        <NavBarInterna />
      </div>
      <div className="container">
        <div className="formularioDosUsuarios">
          <div className="container__titulo">
            <Link to={''} onClick={() => navigate(-1)}>
              {' '}
              Voltar para a página anterior
            </Link>
            <h1>Falta pouco! Complete seus dados e finalize sua compra.</h1>
          </div>
          <div className="card">
            <h2>Quem vai viajar?</h2>
            {Array.from({ length: Number(qtdpessoas) }, (item, index) => (
              <FormInfosPassagem
                pessoas={pessoas}
                setPessoas={setPessoas}
                index={index}
                key={index}
              />
            ))}
          </div>
          <div className="card">
            <h2>Onde enviamos seus vouchers?</h2>
            <p>
              Este e-mail será fundamental para que você administre sua reserva
              e receba informação importante sobre sua viagem
            </p>
            <div className="form">
              <label htmlFor="">
                E-MAIL (NO QUAL DEVEMOS ENVIAR SEUS VOUCHERS)
              </label>
              <input type="text" name="" id="" />
              <label htmlFor="">REECONFIRME O E-MAIL</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="card">
            <h2>Em que número podemos te ligar?</h2>

            <div className="form">
              <label htmlFor="">TELEFONE</label>
              <input type="text" name="" id="" />
              <label htmlFor="">CÓDIGO DO PAÍS</label>
              <input type="text" name="" id="" />
              <div className="form__documento">
                <div>
                  <label htmlFor="">AREA E NUMERO</label>
                </div>
                <div>
                  <input type="text" className="documento" />

                  <input type="text" className="documento__numero" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Como você quer pagar?</h2>
            <form action="">
              <div className="formPagamento">
                <input
                  type="radio"
                  name="formaDePagamento"
                  id="formaDePagamento"
                />
                <label htmlFor="">Pix</label>
              </div>
              <div className="formPagamento">
                <input
                  type="radio"
                  name="formaDePagamento"
                  id="formaDePagamento"
                />
                <label htmlFor=""> Cartão de crédito</label>
              </div>
              <div className="formPagamento">
                <input
                  type="radio"
                  name="formaDePagamento"
                  id="formaDePagamento"
                />
                <label htmlFor=""> Cartão de débito</label>
              </div>
              <div className="formPagamento">
                <input
                  type="radio"
                  name="formaDePagamento"
                  id="formaDePagamento"
                />
                <label htmlFor=""> 2 cartões</label>
              </div>
              <div className="formPagamento">
                <input
                  type="radio"
                  name="formaDePagamento"
                  id="formaDePagamento"
                />
                <label htmlFor="">Pagamento em dinheiro</label>
              </div>
            </form>
          </div>
          <div className="card">
            <h2>Em nome de quem emitimos a nota fiscal?</h2>
            <div className="formPagamento">
              <input type="radio" name="tipoDePessoa" id="tipoDePessoa" />
              <label htmlFor="">Pessoa física</label>
            </div>
            <div className="formPagamento">
              <input type="radio" name="tipoDePessoa" id="tipoDePessoa" />
              <label htmlFor=""> Pessoa jurídica</label>
            </div>
            <div className="form">
              <label htmlFor="">NOME COMPLETO</label>
              <input type="text" name="" id="" />
              <label htmlFor="">CPF</label>
              <input type="text" name="" id="" />
              <div className="form__documento">
                <label htmlFor="">CEP</label>

                <input type="text" />
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Antes de finalizar verifique os dados informados</h2>
            <div className="ConfirmInfos">
              <div className="ConfirmInfos__dataTitle">
                <TodayIcon />
                <h5>Data</h5>
              </div>
              <div className="DataInfos">
                <span>
                  {' '}
                  Ida:{' '}
                  <strong>
                    {new Date(
                      viagem?.data ? viagem?.data : ''
                    ).toLocaleDateString('pt-br', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    ,{'    '} {viagem?.HorarioDaIda}
                  </strong>
                </span>
                <span>
                  {'   '}
                  Volta:{'   '}
                  <strong>
                    {new Date(
                      viagem?.dataVolta ? viagem?.dataVolta : ''
                    ).toLocaleDateString('pt-br', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    ,{'    '} {viagem?.HorarioDaVolta}
                  </strong>
                </span>
              </div>
              <div>
                <div className="ConfirmInfos__dataTitle">
                  <GroupIcon />
                  <h5>Passageiros</h5>
                </div>
                {Array.from({ length: Number(qtdpessoas) }, (item, index) => (
                  <div className="DataInfos" key={index}>
                    <span>Nome: {pessoas[index].nome}</span>
                    <span>Ultimo sobrenome: {pessoas[index].sobrenome}</span>
                    <span>CPF: {pessoas[index].CPF}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="condicoesDeCompra">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">
              Li e aceito as condições de compra , política de privacidade e
              política de alterações e cancelamentos.
            </label>
          </div>
          <div className="botoesDeFinalizar">
            <div>
              <Button
                variant="contained"
                color="error"
                sx={{ p: 2, borderRadius: 24, mr: 8 }}
                onClick={() => {
                  if (payload) {
                    axios.post('http://localhost:8080/minhasviagens', {
                      viagensId: viagem?.id,
                      usuarioId: payload?.id,
                      dataInicio: viagem?.data,
                      dataFinal: viagem?.dataVolta,
                      updatedAt: '2022-10-15T06:30:58.296Z',
                      createdAt: '2022-10-15T06:30:58.296Z',
                    });
                    navigate('/minhasviagens');
                  } else {
                    navigate('/login');
                  }
                }}
              >
                Comprar sem seguro
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                color="success"
                sx={{ p: 2, borderRadius: 24, ml: 8 }}
                onClick={() => {
                  if (payload) {
                    axios.post('http://localhost:8080/minhasviagens', {
                      viagensId: viagem?.id,
                      usuarioId: payload?.id,
                      dataInicio: viagem?.data,
                      dataFinal: viagem?.dataVolta,
                      updatedAt: '2022-10-15T06:30:58.296Z',
                      createdAt: '2022-10-15T06:30:58.296Z',
                    });
                    navigate('/minhasviagens');
                  } else {
                    navigate('/login');
                  }
                }}
              >
                Comprar com seguro
              </Button>
            </div>
          </div>
        </div>
        <DetalhesDoPagamento qtdpessoas={qtdpessoas} viagem={viagem} />
      </div>
    </PassagemIdBox>
  );
};

export default PassagemReserva;
