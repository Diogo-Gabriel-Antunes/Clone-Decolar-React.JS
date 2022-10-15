import { useState } from 'react';

interface Props {
  index: number;
  pessoas: {
    nome: string;
    sobrenome: string;
    CPF: string;
    paisResidencia: string;
    tipoDocumento: string;
  }[];
  setPessoas: React.Dispatch<
    React.SetStateAction<
      {
        nome: string;
        sobrenome: string;
        CPF: string;
        paisResidencia: string;
        tipoDocumento: string;
      }[]
    >
  >;
}
const FormInfosPassagem = ({ pessoas, index, setPessoas }: Props) => {
  return (
    <>
      <form action="" className="form">
        <h3>Pessoa {index + 1}</h3>
        <label htmlFor="">NOME</label>
        <input
          type="text"
          value={pessoas[index].nome}
          onChange={(e) => {
            const novoEstado = Object.assign({}, pessoas);
            novoEstado[index].nome = e.target.value;
            setPessoas(novoEstado);
          }}
        />
        <label htmlFor="">SOBRENOME</label>
        <input
          type="text"
          value={pessoas[index].sobrenome}
          onChange={(e) => {
            const novoEstado = Object.assign({}, pessoas);
            novoEstado[index].sobrenome = e.target.value;
            setPessoas(novoEstado);
          }}
        />
        <label htmlFor="">PAIS DE RESIDENCIA</label>
        <input
          type="text"
          value={pessoas[index].paisResidencia}
          onChange={(e) => {
            const novoEstado = Object.assign({}, pessoas);
            novoEstado[index].paisResidencia = e.target.value;
            setPessoas(novoEstado);
          }}
        />
        <div className="form__documento">
          <div>
            <label htmlFor="">TIPO E NÚMERO DE DOCUMENTO</label>
          </div>
          <div>
            <input
              type="text"
              className="documento"
              value={pessoas[index].tipoDocumento}
              onChange={(e) => {
                const novoEstado = Object.assign({}, pessoas);
                novoEstado[index].tipoDocumento = e.target.value;
                setPessoas(novoEstado);
              }}
            />

            <input
              type="text"
              className="documento__numero"
              value={pessoas[index].CPF}
              onChange={(e) => {
                const novoEstado = Object.assign({}, pessoas);
                novoEstado[index].CPF = e.target.value;
                setPessoas(novoEstado);
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormInfosPassagem;
