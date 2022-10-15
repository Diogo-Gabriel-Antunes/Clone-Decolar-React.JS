import { Card } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardAlugueisCasa from '../../../componentes/cardCasaAlugueis';

import Footer from '../../../componentes/Footer';
import FormularioAlugueis from '../../../componentes/formularioAlugueis';

import NavBarComponent from '../../../componentes/navbar';
import ICasaAlugueis from '../../../interfaces/ICasaAlugueis';

import { HospedagemBox } from '../../Hospedagem/styledHospedagem';

const AlugueisCasaCards = () => {
  const [casaAlugueis, setCasaAlugueis] = useState<ICasaAlugueis[]>();
  const parametros = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/alugueiscasa?destino=${parametros.destino}`)
      .then((resposta) => setCasaAlugueis(resposta.data.AlugueisCasa));
  }, [parametros]);
  return (
    <div>
      <div>
        <NavBarComponent alugueis={true} />
      </div>
      <div>
        <FormularioAlugueis />
      </div>
      <HospedagemBox>
        <span>
          Decolar : Hoteis : Hoteis em Brasil : Hoteis em {parametros.destino}
        </span>
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
            Estes são os hotéis mais populares em {parametros.destino}. Encontre
            a melhor opção para sua viagem.
          </p>
        </div>
        <CardAlugueisCasa casaAlugueis={casaAlugueis} />
      </HospedagemBox>
      <Footer />
    </div>
  );
};

export default AlugueisCasaCards;
