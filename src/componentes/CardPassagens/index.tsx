import { IPassagens } from '../../interfaces/IPassagens';
import { CardPassagensBox } from './styledCardPassagens';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

import { TextField } from '@mui/material';
import { useState } from 'react';
import FormQtdPessoas from './FormQtdPessoas';

interface props {
  passagens: IPassagens[] | undefined;
}

const CardPassagens = ({ passagens }: props) => {
  return (
    <div>
      {passagens
        ? passagens.map((item) => (
            <CardPassagensBox
              elevation={8}
              sx={{ mb: 4, borderRadius: 4 }}
              key={item.id}
            >
              <div className="container__grid">
                <div>
                  <img
                    src={item.imagemCompanhia}
                    alt=""
                    className="imagemCompanhia"
                  />
                </div>

                <div className="origem">
                  <p>
                    <ConnectingAirportsIcon /> IDA : {item.destino}
                  </p>
                  <p>Data:{new Date(item.data).toLocaleDateString()}</p>
                  <p>{item.HorarioDaIda}</p>
                </div>
                <div className="Volta">
                  <p>
                    <ConnectingAirportsIcon /> VOLTA : {item.origem}
                  </p>
                  <p>Data:{new Date(item.dataVolta).toLocaleDateString()}</p>
                  <p>{item.HorarioDaVolta}</p>
                </div>
                <div className="precoContainer">
                  <p className="apartir">A partir de</p>
                  <p>
                    {item.preco.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                  <FormQtdPessoas passagem={item} />
                </div>
              </div>
            </CardPassagensBox>
          ))
        : ''}
    </div>
  );
};

export default CardPassagens;
