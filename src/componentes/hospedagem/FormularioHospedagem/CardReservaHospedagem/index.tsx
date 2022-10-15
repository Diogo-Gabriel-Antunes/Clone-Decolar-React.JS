import { Paper } from '@mui/material';
import { IQuartos } from '../../../../interfaces/IQuartos';
import { CardReservaHospedagemBox } from './StyledReservaHospedagem';
import HotelIcon from '@mui/icons-material/Hotel';
import TvIcon from '@mui/icons-material/Tv';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotTubIcon from '@mui/icons-material/HotTub';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PersonIcon from '@mui/icons-material/Person';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

interface Props {
  quarto: IQuartos;
  selecionador: React.Dispatch<
    React.SetStateAction<[IQuartos | undefined, string] | undefined>
  >;
}

const CardReservaHospedagem = ({ quarto, selecionador }: Props) => {
  return (
    <Paper sx={{ my: 3, width: 1042, height: 398 }}>
      <CardReservaHospedagemBox>
        <div className="ColumnInfos">
          <img src={quarto.imagem} alt="" />
          <div className="ColumnInfos__interno">
            <p className="ColumnInfos__interno__nome">{quarto.nome}</p>
            <p className="ColumnInfos__interno__options">
              Superficie: {quarto.AreaDoQuarto} m2
            </p>
            <div className="ColumnInfos__interno__ajuste">
              {quarto.tv ? (
                <div className="ColumnInfos__interno__options">
                  <TvIcon />
                  <p>Televisão</p>
                </div>
              ) : (
                ''
              )}
              {quarto.arCondicionado ? (
                <div className="ColumnInfos__interno__options">
                  <AcUnitIcon />
                  <p>Ar-Condicionado</p>
                </div>
              ) : (
                ''
              )}{' '}
              {quarto.wifi ? (
                <div className="ColumnInfos__interno__options">
                  <WifiIcon />
                  <p>Wi-Fi grátis</p>
                </div>
              ) : (
                ''
              )}
              {quarto.hidromassagem ? (
                <div className="ColumnInfos__interno__options">
                  <HotTubIcon />
                  <p>Hidromassagem</p>
                </div>
              ) : (
                ''
              )}{' '}
              {quarto.frigobar ? (
                <div className="ColumnInfos__interno__options">
                  <SportsBarIcon />
                  <p>Frigobar</p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="border">
          <div className="ColumnOpcoes__infosQuartosContainer">
            <div className="ColumnOpcoes">
              <div className="ColumnOpcoes__infosQuartos">
                <div className="ColumnOpcoes__infosQuartosQTDPessoas">
                  <PersonIcon />
                  <p>2 pessoas </p>
                </div>
                <p>no 1 quarto</p>
                <div className="ColumnOpcoes__infosQuartosCama">
                  <p>
                    <HotelIcon />1 bebê(s) em camas existentes e 1 casal
                    extra-grande(s)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ColumnOpcoes__infosQuartosPrecoContainer">
                <div className="ColumnOpcoes__infosQuartosPrecoContainerAjuste">
                  <div className="ColumnOpcoes__infosQuartosPreco">
                    <p className="ColumnOpcoes__infosQuartosPreco__cifrao">
                      R$
                    </p>
                    <p className="ColumnOpcoes__infosQuartosPreco__valor">
                      {quarto.preco.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="ColumnOpcoes__infosQuartosPreco__impostos">
                      Impostos inclusos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ListaDeOpcoes">
              <ul>
                <li className="ListaDeOpcoes__FormaDePagamento">
                  Parcele com o cartão de crédito
                </li>
                <li>
                  <TaskAltIcon />
                  Café da manhã
                </li>
                <li>
                  <RemoveDoneIcon className="ajustesSvg" />
                  Não permite realizar alterações ou cancelamentos Selecionada
                </li>
              </ul>
            </div>
            <div className="inputSelecionar">
              <div>
                <input
                  type="radio"
                  name="opcao"
                  id="opcao"
                  onChange={() =>
                    selecionador([quarto, 'Parcele com o cartão de crédito'])
                  }
                />
                <label htmlFor="opcao">Selecionar</label>
              </div>
            </div>
          </div>

          <div className="ColumnOpcoes__infosQuartosContainer">
            <div className="ColumnOpcoes">
              <div className="ColumnOpcoes__infosQuartos">
                <div className="ColumnOpcoes__infosQuartosQTDPessoas">
                  <PersonIcon />
                  <p>2 pessoas </p>
                </div>
                <p>no 1 quarto</p>
                <div className="ColumnOpcoes__infosQuartosCama">
                  <p>
                    <HotelIcon />1 bebê(s) em camas existentes e 1 casal
                    extra-grande(s)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="ColumnOpcoes__infosQuartosPrecoContainer">
                <div className="ColumnOpcoes__infosQuartosPrecoContainerAjuste">
                  <div className="ColumnOpcoes__infosQuartosPreco">
                    <p className="ColumnOpcoes__infosQuartosPreco__cifrao">
                      R$
                    </p>
                    <p className="ColumnOpcoes__infosQuartosPreco__valor">
                      {quarto.preco.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="ColumnOpcoes__infosQuartosPreco__impostos">
                      Impostos inclusos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ListaDeOpcoes">
              <ul>
                <li className="ListaDeOpcoes__FormaDePagamento">
                  Pague para a hospedagem
                </li>
                <li>
                  <TaskAltIcon />
                  Café da manhã
                </li>
                <li>
                  <RemoveDoneIcon className="ajustesSvg" />
                  Não permite realizar alterações ou cancelamentos Selecionada
                </li>
              </ul>
            </div>
            <div className="inputSelecionar">
              <div>
                <input
                  type="radio"
                  name="opcao"
                  id="opcao"
                  onChange={() =>
                    selecionador([quarto, 'Pague para a hospedagem'])
                  }
                />
                <label htmlFor="opcao">Selecionar</label>
              </div>
            </div>
          </div>
        </div>
      </CardReservaHospedagemBox>
    </Paper>
  );
};

export default CardReservaHospedagem;
