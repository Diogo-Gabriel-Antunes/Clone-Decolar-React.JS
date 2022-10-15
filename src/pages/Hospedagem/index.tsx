import { Card } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../componentes/Footer';
import CardHospedagem from '../../componentes/hospedagem/CardHospedagem';
import FormularioHospedagem from '../../componentes/hospedagem/FormularioHospedagem';
import NavBarComponent from '../../componentes/navbar';
import IHospedagem from '../../interfaces/IHospedagens';
import { HospedagemBox } from './styledHospedagem';

const Hospedagem = () => {
  const [hoteis, setHoteis] = useState<IHospedagem[]>();
  const [destino, setDestino] = useState('');
  const parametros = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/hospedagem?localizacao=${parametros.localizacao}`
      )
      .then((resposta) => setHoteis(resposta.data.hospedagem));
  }, [parametros]);
  return (
    <div>
      <div>
        <NavBarComponent hospedagem={true} />
      </div>
      <div>
        <FormularioHospedagem setDestino={setDestino} destino={destino} />
      </div>
      <HospedagemBox>
        <span>Decolar : Hoteis : Hoteis em Brasil : Hoteis em São paulo</span>
        <Card className="Card">
          <div className="div__Botao first">
            <span className="Botao">
              <span>Serviços</span>
            </span>
          </div>
          <div className="div__Botao">
            <span className="Botao">
              <span>Tipo de acomodação</span>
            </span>
          </div>
          <div className="div__Botao">
            <span className="Botao">
              <span>Estrelas</span>
            </span>
          </div>
          <div className="div__Botao">
            <span className="Botao">
              <span>Preço por noite</span>
            </span>
          </div>
        </Card>
        <div>
          <h3>Ofertas de hoteis populares</h3>
          <p>
            {' '}
            Estes são os hotéis mais populares em São Paulo. Encontre a melhor
            opção para sua viagem.
          </p>
        </div>
        <CardHospedagem hoteis={hoteis} />
      </HospedagemBox>
      <Footer />
    </div>
  );
};

export default Hospedagem;
