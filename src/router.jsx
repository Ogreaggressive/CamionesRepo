import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ViajesEnCurso from './pages/viajesEnCurso';
import Estadisticas from './pages/Estadisticas';
import Inventario from './pages/Inventario';
import NuevoViaje from './pages/nuevoViaje';

import AgregarCamion from './pages/agregarCamion';
import AgregarDocumento from './pages/agregarDocumento';
import AgregarPagoMensual from './pages/agregarPagoMensual';

import Camiones from './pages/camiones';
import Documentos from './pages/documentos';
import PagosMensuales from './pages/pagosMensuales';

import GastosCamion from './pages/gastosCamion';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/viajesEnCurso' element={<ViajesEnCurso/>} />
        <Route path='/inventario' element={<Inventario/>} />

        <Route path='/nuevoViaje' element={<NuevoViaje/>} />

        <Route path='/agregarcamiones' element={<AgregarCamion/>} />
        <Route path='/agregardocumentos' element={<AgregarDocumento/>} />
        <Route path='/agregarpagosmensuales' element={<AgregarPagoMensual/>} />

        <Route path='/camiones' element={<Camiones/>} />
        <Route path='/documentos' element={<Documentos/>} />
        <Route path='/pagosmensuales' element={<PagosMensuales/>} />

        <Route path='/gastosCamion' element={<GastosCamion />} /> 

        <Route path='/CamionesRepo/' element={<Estadisticas/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;