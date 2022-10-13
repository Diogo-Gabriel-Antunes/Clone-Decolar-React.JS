import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AlugueisCasa from './pages/AlugueisCasa';
import AlugueisCasaCards from './pages/AlugueisCasa/alugueis';
import AluguelDeCarrosHome from './pages/aluguelDeCarros';
import PageCarros from './pages/aluguelDeCarros/carros';
import Home from './pages/home';
import Hospedagem from './pages/Hospedagem';
import Login from './pages/login';
import Passagens from './pages/passagens';
import PagePassagens from './pages/passagens/passagensPage';
import Passaporte from './pages/passaporte';
import Registrar from './pages/login/cadastro';
import PrivateRoute from './PrivateRoute';
import MinhasViagens from './pages/minhasViagens';
import HospedagemId from './pages/Hospedagem/HospedagemID';
import CasaId from './pages/AlugueisCasa/alugueis/casaId';
import Atracoes from './pages/atracoes';
import AtracoesPorRegiao from './pages/atracoes/atracoesPorRegiao';
import AtracoesId from './pages/atracoes/atracoesPorRegiao/atracoesId';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospedagem/:localizacao" element={<Hospedagem />} />
        <Route path="/hospedagem/:localizacao/:id" element={<HospedagemId />} />
        <Route path="/carros" element={<AluguelDeCarrosHome />} />
        <Route path="/carros/:localDeRetirada" element={<PageCarros />} />
        <Route path="/passagens" element={<Passagens />} />
        <Route
          path="/passagens/:destino/:origem/:dataIda/:dataVolta"
          element={<PagePassagens />}
        />
        <Route path="/passagens/:destino/:origem" element={<PagePassagens />} />
        <Route path="/alugueiscasa" element={<AlugueisCasa />} />
        <Route path="/alugueiscasa/:destino" element={<AlugueisCasaCards />} />
        <Route path="/alugueiscasa/:destino/:id" element={<CasaId />} />
        <Route path="/passeios" element={<Atracoes />} />
        <Route path="/passeios/:destino" element={<AtracoesPorRegiao />} />
        <Route path="/passeios/:destino/:id" element={<AtracoesId />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route
          path="/passaporte"
          element={
            <PrivateRoute>
              <Passaporte />
            </PrivateRoute>
          }
        />
        <Route
          path="/minhasviagens"
          element={
            <PrivateRoute>
              <MinhasViagens />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
