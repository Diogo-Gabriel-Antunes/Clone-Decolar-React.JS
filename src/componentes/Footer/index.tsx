import { InfosBox, MainFooter } from "./styledFooter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <MainFooter>
      <div className="mainContainer">
        <div className="lista__container">
          <ul className="lista">
            <li className="lista__item__title">
              <h3>Lugares para Viajar</h3>
            </li>
            <li className="lista__item">Rio de Janeiro</li>
            <li className="lista__item">Natal</li>
            <li className="lista__item">Nova York</li>
            <li className="lista__item">Porto de Galinhas</li>
          </ul>
        </div>
        <div className="lista__container">
          <ul className="lista">
            <li className="lista__item__title">
              <h3>Viajar junto a Decolar</h3>
            </li>
            <li className="lista__item">Guia de Destino</li>
            <li className="lista__item">Curitiba</li>
            <li className="lista__item">Cancun</li>
            <li className="lista__item">Hoteis Fazenda</li>
          </ul>
        </div>
        <div className="lista__container">
          <ul className="lista">
            <li className="lista__item__title">
              <h3>Hospedagens</h3>
            </li>
            <li className="lista__item">Pousada em Porto de Galinhas</li>
            <li className="lista__item">Beach Park</li>
            <li className="lista__item">Salinas Maragogi</li>
            <li className="lista__item">Hotel Rio de Janeiro</li>
          </ul>
        </div>
        <div className="lista__container">
          <ul className="lista">
            <li className="lista__item__title">
              <h3>Companhias Aereas</h3>
            </li>
            <li className="lista__item">Latam</li>
            <li className="lista__item">Azul</li>
            <li className="lista__item">Gol</li>
            <li className="lista__item">United</li>
          </ul>
        </div>
      </div>
      <div className="InfosFooter__container">
        <div className="InfosFooter">
          <div className="footer__icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
          <div className="infos">
            <span>
              <strong> Central de vendas</strong> 0800 883 6342
            </span>
            <span>
              <strong> Pós-venda</strong>: + 55 11 4003 9444
            </span>
          </div>
        </div>

        <InfosBox>
          <div className="lista__container">
            <ul className="lista">
              <li className="lista__item__title">Minha conta</li>
              <li className="lista__item">Passaporte Decolar</li>
              <li className="lista__item">Minhas Viagens</li>
              <li className="lista__item">Meu Perfil</li>
            </ul>
          </div>
          <div className="lista__container">
            <ul className="lista">
              <li className="lista__item__title">Somos Decolar</li>
              <li className="lista__item">Informação sobre coronavirus</li>
              <li className="lista__item">Nosso telefone</li>
              <li className="lista__item">Trabalhe na Decolar</li>
              <li className="lista__item">Contato com a imprensa</li>
              <li className="lista__item">Relações com investidores</li>
            </ul>
          </div>

          <div className="lista__container">
            <ul className="lista">
              <li className="lista__item__title">Compra segura</li>
              <li className="lista__item">Termos e condições</li>
              <li className="lista__item">Politica de privacidade</li>
              <li className="lista__item">Black Friday</li>
            </ul>
          </div>

          <div className="lista__container">
            <ul className="lista">
              <li className="lista__item__title">Promova seu negocio</li>
              <li className="lista__item">Cadastre sua locadora</li>
              <li className="lista__item">Participe do Programa de Agencias</li>
            </ul>
          </div>
        </InfosBox>
      </div>
    </MainFooter>
  );
};

export default Footer;
