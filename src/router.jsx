import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ViajesEnCurso from './pages/viajesEnCurso';
import Estadisticas from './pages/Estadisticas';
import Inventario from './pages/Inventario';
import NuevoViaje from './pages/nuevoViaje';

import AgregarCamion from './pages/agregarCamion';
import AgregarDocumento from './pages/AgregarDocumento';
import AgregarPagoMensual from './pages/agregarPagoMensual';

import Camiones from './pages/camiones';
import Documentos from './pages/documentos';
import PagosMensuales from './pages/pagosMensuales';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/viajesEnCurso' element={<ViajesEnCurso/>} />
        <Route path='/inventario' element={<Inventario/>} />
        <Route path='/estadisticas' element={<Estadisticas/>} />
        <Route path='/nuevoViaje' element={<NuevoViaje/>} />

        <Route path='/agregarCamion' element={<AgregarCamion/>} />
        <Route path='/agregarDocumento' element={<AgregarDocumento/>} />
        <Route path='/agregarPagoMensual' element={<AgregarPagoMensual/>} />

        <Route path='/camiones' element={<Camiones/>} />
        <Route path='/documentos' element={<Documentos/>} />
        <Route path='/pagosmensuales' element={<PagosMensuales/>} />

        <Route path='/' element={<Estadisticas/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;