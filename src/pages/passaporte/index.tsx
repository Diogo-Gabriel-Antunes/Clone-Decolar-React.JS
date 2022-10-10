import NavBarComponent from '../../componentes/navbar';
import { PassaporteBox } from './styledPassaporte';
import jwt_decode from 'jwt-decode';
import nookies from 'nookies';
import { payload } from '../../interfaces/Payload';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import IUsuario from '../../interfaces/IUsuario';
import IRecomendacoes from '../../interfaces/IRecomendacoes';
import CardRecomendacoes from '../../componentes/cardRecomendacoes';
import Footer from '../../componentes/Footer';
import { useNavigate } from 'react-router-dom';

const Passaporte = () => {
  const recomendacoes: IRecomendacoes[] = [
    {
      tipo: 'Voo',
      titulo: 'Voos para Recife',
      infos: 'Saindo de São paulo',
      preco: 'Preço por ida e volta',
      imagem:
        'https://media.staticontent.com/media/pictures/9806439d-a56e-4866-9990-73b9121a0593/298X201',
      pontos: 49372,
    },
    {
      tipo: 'Seguro',
      titulo: 'Assistencia ao viajante em Brasil',
      infos: 'Por 226 dias',
      preco: 'Preço por pessoa de',
      imagem:
        'https://media.staticontent.com/media/pictures/04269a2d-beca-48bb-8a83-a512a232893c/298X201',
      pontos: 240648,
    },
    {
      tipo: 'Hospedagem',
      titulo: 'Esmeralda Praia Hotel',
      infos: 'A 9,17km do centro',
      preco: 'Preço por noite com impostos apartir de',
      imagem:
        'https://media.staticontent.com/media/pictures/85b5484c-429b-470a-958b-ae9755f8cf5d/298X201',
      pontos: 44027,
    },
    {
      tipo: 'Voo',
      titulo: 'Voos para Salvador',
      infos: 'Saindo de São paulo',
      preco: 'Preço por ida e volta',
      imagem:
        'https://media.staticontent.com/media/pictures/408861fa-25f7-4b7b-a395-a5311e7c51f2/298X201',
      pontos: 32026,
    },
    {
      tipo: 'Voo',
      titulo: 'Voos para Fortaleza',
      infos: 'Saindo de São paulo',
      preco: 'Preço por ida e volta',
      imagem:
        'https://media.staticontent.com/media/pictures/1c823f96-0d4d-43ff-8b49-e34efdb7b39e/298X201',
      pontos: 37280,
    },
    {
      tipo: 'Voo',
      titulo: 'Voos para Rio de Janeiro',
      infos: 'Saindo de São paulo',
      preco: 'Preço por ida e volta',
      imagem:
        'https://media.staticontent.com/media/pictures/3e0053fd-07ca-4961-87bb-b50990a96ecf/298X201',
      pontos: 22638,
    },
  ];
  let payload: payload;
  const navigate = useNavigate();

  if (nookies.get(null).TOKEN) {
    payload = jwt_decode(nookies.get(null).TOKEN);
  }

  const [usuario, setUsuario] = useState<IUsuario>();

  const UrlPontosPendentes =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y5RjlGOSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMi4yMTggMS4xNzZjMCA1LjY5NyAzLjkzMiAxMC4zMTYgOC43ODIgMTAuMzE2czguNzgyLTQuNjE5IDguNzgyLTEwLjMxNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYyODgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIuMjE4IDIzLjQyMWMwLTYuNTg4IDMuOTMyLTExLjkzIDguNzgyLTExLjkzczguNzgyIDUuMzQyIDguNzgyIDExLjkzIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRjI4OCIgZD0iTTMuODY0IDcuNDQyaDE0LjI3MmwtNC41MjIgNC4wNUg4LjAzNXoiLz4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzFCMTgyQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzM5IiBkPSJNMi40NjIgNC4wNjVDMy4zOSA4LjMyNSA2Ljg2IDExLjQ5MiAxMSAxMS40OTJjNC44NSAwIDguNzgyLTQuMzQ3IDguNzgyLTkuNzEiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGMjg4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzFCMTgyQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzM5IiBkPSJNMS4xMiAxLjExMWgxOS43Nk0xLjEyIDIzLjAyMWgxOS43Nk0yLjY2NCAxOS45MjJoNi4xNzUiLz4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzFCMTgyQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzM5IiBkPSJNMi4yMTggMjIuNDE0YzAtNi4wMzIgMy45MzItMTAuOTIyIDguNzgyLTEwLjkyMiA0LjI1NSAwIDcuODAzIDMuNzYzIDguNjEgOC43NTkiLz4KICAgIDwvZz4KPC9zdmc+Cg==';
  const UrlPontosDisponiveis =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg0OHY0OEgweiIgb3BhY2l0eT0iLjIiLz4KICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzFCMTgyQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNzUiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQjBERUQ2IiBkPSJNMzguMzEyIDE3LjI1OEMzNC42NSA5LjUyIDI1LjMyOSA2LjE2OCAxNy40OTMgOS43NjggOS42NTggMTMuMzY2IDYuMjc0IDIyLjU1NSA5LjkzNyAzMC4yOTJjMy42NjIgNy43MzYgMTIuOTgyIDExLjA5IDIwLjgxOCA3LjQ5IDUuODU4LTIuNjkgOS4yMjctOC41MDYgOS4wMjUtMTQuNTAzIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS45NSAxOS4ybC03LjgzMiA5LjM5LTMuOTk2LTMuODQiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=';
  const UrlDoFundo =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzY2IiBoZWlnaHQ9IjM4MCIgdmlld0JveD0iMCAwIDEzNjYgMzgwIj4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTk0OC44IDI4My40MDZMMTE0NS44NyAxMDBoMjIwLjZWMEgxMTAzLjUybC0xOTcuMDcgMTgzLjQwNkg2OS4xMjVMLTU3IDMwOS4yMTFsNzAuNjIgNzAuOCA5Ni44NTMtOTYuNjA1eiIvPgo8L3N2Zz4K';
  const UrlDoPassaporte =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iMCAwIDQyIDU2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQkNCRiIgZD0iTS45OTcgNy4zNThDMjQuMDk0IDIuNDkzIDM1Ljc4Mi4wNDcgMzYuMDYuMDJjLjQxNi0uMDQgMS42OTgtLjE2NSAxLjY5OCAxLjM3NXY4LjA2MkguOTg4Qy41NSA5LjQ1NyAwIDkuMzY3IDAgOC40NDVjMC0uNjE0LjMzMi0uOTc2Ljk5Ny0xLjA4N3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCA4LjQzNGMuMDI0LjY0OS4zNTMuOTg2Ljk4OCAxLjAxMmgzOS43ODZjLjUzIDAgLjk1OC40MjkuOTU4Ljk1OHY0NC42MzdjMCAuNTMtLjQyOS45NTktLjk1OC45NTlINS4yNUE1LjI1IDUuMjUgMCAwIDEgMCA1MC43NVY4LjQzNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZCQ0JGIiBkPSJNOS45MzYgNDMuODU1aDEwLjc2YzYuMTMgMCAxMS4xLTUuMjEgMTEuMS0xMS42MzhzLTQuOTctMTEuNjM5LTExLjEtMTEuNjM5SDkuOTM2djIzLjI3N3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY3QTgwIiBkPSJNOS45OSAyMC41NzhoLS4wNTR2MjMuMjc3aC4wNTRjNi4zNzMgMCAxMS41MzktNS4yMSAxMS41MzktMTEuNjM4UzE2LjM2MyAyMC41NzggOS45OSAyMC41NzgiLz4KICAgIDwvZz4KPC9zdmc+Cg==';

  useEffect(() => {
    axios
      .get(`http://localhost:8080/usuarios/${payload?.id}`)
      .then((resposta) => setUsuario(resposta.data.usuario));
  }, []);
  return (
    <div>
      <NavBarComponent />

      <PassaporteBox>
        <div className="passaporte__image">
          <img src={UrlDoFundo} alt="" />
        </div>
        <div className="passaporte__container">
          <div>
            <img src={UrlDoPassaporte} alt="" />
            <div className="passaporte__container__title">
              <h1 className="titulo__meuPassaporte">Meu passaporte</h1>
              <h1 className="titulo__nome">
                {usuario?.nome}{' '}
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ ml: 11 }}
                  onClick={() => {
                    const token = nookies.get().TOKEN;
                    axios
                      .post('http://localhost:8080/usuarios/logout', {
                        token: token,
                      })
                      .then((resposta) => {
                        if (resposta.status === 204) {
                          nookies.destroy(null, 'TOKEN');
                          nookies.destroy(null, 'REFRESH_TOKEN');
                          navigate('/');
                        }
                      });
                  }}
                >
                  Logout
                </Button>
              </h1>
            </div>
          </div>
          <div className="infos__container">
            <div className="infos">
              <h2 className="infos__categoria">CATEGORIA NIVEL 1</h2>
              <h2 className="infos__passaporte">Passaporte </h2>
              <h2 className="infos__passaporte">Viajante</h2>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 24,
                  mt: 4,
                  color: '#444',
                  border: '1px solid #444',
                }}
              >
                Como acumulo pontos?
              </Button>
            </div>
            <div className="card__container">
              <div className="card__pontos">
                <h1>PONTOS DISPONIVEIS</h1>
                <div className="pontosdisponiveis">
                  <div>
                    <img src={UrlPontosDisponiveis} alt="" />
                    <span>{usuario?.pontos}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="card__pontos">
                  <h1>PONTOS PENDENTES</h1>
                  <div className="pontospendentes">
                    <div>
                      <img src={UrlPontosPendentes} alt="" />
                      <span>{usuario?.pontosPendentes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="infos__creditCard">
            <div className="creditCard">
              <div className="creditCard__h3">
                A viagem ficou para depois? Tudo bem.
              </div>
              <div className="creditCard__h4">
                Com o Cartão Decolar Santander todas as suas compras valem
                pontos que não expiram¹.
              </div>
              <button className="botaoPejaOSeu">Peça o seu</button>
            </div>
          </div>
          <div className="detalhes__creditCard">
            <p>
              Sujeito à aprovação de crédito. 1. A cada nova compra, ocorre a
              renovação da validade dos pontos em 18 meses. Consulte condições
              em decolar.com/cartao.
            </p>
          </div>
          <div className="recomendacoes">
            <h2>Troque seus pontos por qualquer produto Decolar</h2>
          </div>
          <div className="carrossel__container">
            <CardRecomendacoes recomendacoes={recomendacoes} />
          </div>
        </div>
      </PassaporteBox>
      <Footer />
    </div>
  );
};

export default Passaporte;
