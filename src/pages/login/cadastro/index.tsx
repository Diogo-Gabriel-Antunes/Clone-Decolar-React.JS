import NavBarInterna from '../../../componentes/navbar/navbarInterna';
import nookies from 'nookies';
import { BoxNavbar } from '../styledLogin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { CadastroBox } from './styledCadastro';

const Registrar = () => {
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [foto, setFoto] = useState<string>();
  const navigate = useNavigate();

  const [infosInvalidas, setInfosInvalidas] = useState(false);

  const UrlImagem =
    'data:image/png;base64,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';
  return (
    <div>
      <BoxNavbar>
        <div>
          <NavBarInterna />
        </div>
      </BoxNavbar>
      <CadastroBox>
        <div className="Login__form">
          <div className="Login__conteudo">
            <p>
              <Link to="/" className="link">
                {' '}
                Inicie sessão{' '}
              </Link>
              <ArrowForwardIosIcon sx={{ width: 16 }} />{' '}
              <strong> Cadastro </strong>
            </p>
            <div className="infos">
              <img src={UrlImagem} alt="" />
              <p>Qual é seu e-mail?</p>
              <TextField
                type={'text'}
                label="E-mail"
                variant="filled"
                sx={{ width: 312, mt: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                type={'text'}
                label="Nome"
                variant="filled"
                sx={{ width: 312, mt: 2 }}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <TextField
                type={'text'}
                label="Foto"
                variant="filled"
                sx={{ width: 312, mt: 2 }}
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
                required
              />
              <TextField
                type={'password'}
                label="Senha"
                variant="filled"
                sx={{ width: 312, mt: 2 }}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />

              {infosInvalidas ? (
                <Alert
                  severity="error"
                  sx={{
                    width: 280,
                    mt: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Todos os campos são obrigatorios
                </Alert>
              ) : (
                ''
              )}
              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  borderRadius: 99,
                  color: '#fff',
                  bgcolor: '#4300d2',
                  width: 200,
                  letterSpacing: 2,
                }}
                onClick={() => {
                  axios
                    .post('http://localhost:8080/usuarios', {
                      email: email,
                      senha: senha,
                      foto: foto,
                      nome: nome,
                    })
                    .then((resposta) => {
                      if (resposta.status === 200) {
                        nookies.set(null, 'TOKEN', resposta.data.token);
                        navigate('/passaporte');
                      }
                    })
                    .catch(() => setInfosInvalidas(true));
                }}
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </CadastroBox>
    </div>
  );
};

export default Registrar;
