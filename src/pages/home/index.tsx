import {
  ImagensBox,
  PromocaoBox,
  Condicoes,
  InfosBox,
  SeoBox,
} from './stylesHome';
import Footer from '../../componentes/Footer';
import FormularioHospedagem from '../../componentes/hospedagem/FormularioHospedagem';
import NavBarComponent from '../../componentes/navbar';
import { useState } from 'react';

const Home = () => {
  const [destino, setDestino] = useState('');
  return (
    <div>
      <div>
        <NavBarComponent hospedagem={true} />
      </div>
      <FormularioHospedagem setDestino={setDestino} destino={destino} />
      <ImagensBox>
        <div className="div__semanadoturismo">
          <img
            src="https://media.staticontent.com/media/pictures/c1d4a935-6fbf-48fd-8fcb-5c4ddd46a0a5"
            alt=""
            className="imagem__semanadoturismo"
          />
        </div>
        <div className="div__voosparaargentina">
          <img
            src="https://media.staticontent.com/media/pictures/a37f5f7b-f9f8-4851-bbf4-17b421e047e1"
            alt=""
            className="imagem__voosparaargentina"
          />
        </div>
        <div className="div__hoteis">
          <img
            src="https://media.staticontent.com/media/pictures/1fc96767-79ea-446d-85f5-ea90d406d714"
            alt=""
            className="imagem__hoteis"
          />
        </div>
      </ImagensBox>
      <PromocaoBox>
        <div className="promocao__container">
          <h4>
            Com o Cartão Decolar Santander Visa
            <strong className="red">
              <br />
              Voce pode concorre a 600mil pontos toda semana
            </strong>
          </h4>
          <h6>
            Veja a <strong>Copa do Mundo FIFA 2022 </strong>
            <strong className="red">De onde quiser.</strong>
          </h6>
          <div className="div__grid">
            <div className="div__card">
              <div className="div__icon"></div>
              <div className="description">
                Voce ganha pontos Passaporte Decolar por todas as suas compras
              </div>
            </div>
            <div className="div__card">
              <div className="div__icon__clock"></div>
              <div className="description">
                6x mais chances de ganhar com o Cartão Decolar Santander Visa.
              </div>
            </div>
            <div className="div__card">
              <div className="div__icon__airplane"></div>
              <div className="description">
                e continue acumulando as milhas das companhias aéreas.
              </div>
            </div>
          </div>
          <button className="promoção__botao">Peça ja o seu</button>
        </div>

        <div className="image"></div>
      </PromocaoBox>
      <div>
        <Condicoes className="condicoes">
          Consulte condições, períodos de participação, descrição dos Prêmios e
          limites de despesas dos pacotes, no Regulamento. Para mais
          informações, dúvidas ou consultar certificado SEAE/ME, acesse o
          Regulamento em <br /> visa.com.br/decoleparaocatar.
        </Condicoes>
      </div>
      <InfosBox>
        <h3>Compre tudo para a sua viagem na decolar</h3>
        <div className="card">
          <div className="card__conteudo">
            <h3>Como comprar na Decolar?</h3>
            <p>
              Na Decolar você pode comprar tudo o que precisa para as suas
              férias. Primeiro, insira a informação da sua viagem no buscador.
              Compare entre centenas de opções e escolha a que melhor se adapta
              aos seus planos, clicando em Comprar. Cadastre os dados dos
              passageiros, selecione o meio de pagamento e insira demais
              informações necessárias. Aproveite as ofertas e promoções da
              Decolar! Por último, clique novamente em Comprar e receba os
              vouchers no seu e-mail para começar a desfrutar da sua viagem.
            </p>
          </div>
          <div className="card__conteudo">
            <h3>Documentação necesssária para comprar e viajar</h3>
            <p>
              Para comprar a sua viagem na Decolar, você deve ter os números dos
              documentos de identidade, os nomes, os sobrenomes e as datas de
              nascimento dos passageiros. Antes de viajar, revise o detalhe da
              sua reserva em Minha Conta e saiba quais são os vistos e vacinas
              obrigatórios no país de destino. Isso inclui as escalas nas
              viagens de avião e os tours que você realizar durante a sua
              viagem. Se uma criança precisar viajar sozinha ou acompanhada,
              deverá contar com uma autorização especial para sair do país.
            </p>
          </div>
          <div className="card__conteudo">
            <h3>É possível alterar ou cancelar uma compra?</h3>
            <p>
              Na Decolar você pode fazer a alteração ou o cancelamento de uma
              reserva, mas leve em consideração que alguns provedores ou tarifas
              não permitem ou cobram um custo adicional para isso. Em voos,
              hotéis e carros, você só pode fazer alterações no mesmo provedor.
              Você também pode cancelar uma reserva para todos ou para alguns
              dos passageiros. O que você não pode fazer é alterar o titular da
              reserva. Lembre-se de revisar as políticas de alteração e
              cancelamento da sua reserva em Minha Conta.
            </p>
          </div>
          <div className="card__conteudo">
            <h3>Por que devo escolher a Decolar para a minha viagem?</h3>
            <p>
              A Decolar é uma das agências de viagens online com maior
              trajetória na América Latina e recomendada por milhares de
              viajantes. Aproveite as ofertas e promoções no nosso site e
              conheça o mundo todo. Compre sua viagem na Decolar através da web
              ou da app. Se você tem alguma dúvida ou quer mudar algo sobre a
              sua viagem, você pode fazê-lo em Minhas Viagens. Viaje com a
              confiança de que você pode contar conosco para o que precisar.
            </p>
          </div>
        </div>
      </InfosBox>
      <SeoBox>
        <div>
          <h2 className="title">
            Reserve sua viagem na maior agência de viagens online do Brasil
          </h2>
          <p className="texto">
            {' '}
            Reserve sua viagem no Decolar e garanta as melhores tarifas em
            passagens aéreas, hotéis, pacotes de viagem, cruzeiros e aluguel de
            carro. Somos a maior agência de viagens online da América Latina
            presente em 21 países, dentre eles Argentina, Estados Unidos e
            Espanha. Contamos com a parceria de mais de 500 companhias aéreas e
            150 mil hotéis em todo o mundo e, com isso, garantimos o melhor
            preço de viagem do Brasil. Ao comprar uma passagem aérea ou um
            pacote de viagem, os clientes do Decolar também garantem vantagens
            exclusivas, como descontos em restaurantes e lojas no destino
            escolhido, além de 10% de desconto em compras no Duty Free. Confira
            nossas promoções e vantagens. Aproveite!
          </p>
        </div>
        <div className="listas__container">
          <div className="listas__subContainer">
            <ul className="lista">
              <li className="lista__item">
                <h3 className="lista__item__title">Hospedagens Baratas</h3>
              </li>
              <li className="lista__item">Goteis em Curitiba</li>
              <li className="lista__item">Pousadas em Campos do Jordão</li>
              <li className="lista__item">Hoteis em Portugal</li>
              <li className="lista__item">Pousadas em Monte Verde</li>
            </ul>
          </div>
          <div className="listas__subContainer">
            <ul className="lista">
              <li className="lista__item">
                <h3 className="lista__item__title">Passagens</h3>
              </li>
              <li className="lista__item">Passagens para Portugal</li>
              <li className="lista__item">Passagens para Maceio</li>
              <li className="lista__item">Passagens para Porto</li>
              <li className="lista__item">Passagens para João Pessoa</li>
            </ul>
          </div>
          <div className="listas__subContainer">
            <ul className="lista">
              <li className="lista__item">
                <h3 className="lista__item__title">Pacotes de Viagens</h3>
              </li>
              <li className="lista__item">Viagem para Salvador</li>
              <li className="lista__item">Viagem para Jalapão</li>
              <li className="lista__item">Viagem para Nordeste</li>
              <li className="lista__item">Viagem para Foz do Iguaçu</li>
            </ul>
          </div>
          <div className="listas__subContainer">
            <ul className="lista">
              <li className="lista__item">
                <h3 className="lista__item__title">Planeje a sua viagem</h3>
              </li>
              <li className="lista__item">Colline De France</li>
              <li className="lista__item">Pacotes para Maceio</li>
              <li className="lista__item">Cartão Decolar Santander</li>
              <li className="lista__item">Guia de Destinos</li>
            </ul>
          </div>
        </div>
      </SeoBox>
      <Footer />
    </div>
  );
};

export default Home;
