import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ViajesEnCurso from './pages/viajesEnCurso';
import Estadisticas from './pages/Estadisticas';
import Inventario from './pages/Inventario';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/viajesEnCurso' element={<ViajesEnCurso/>} />
          <Route path='/inventario' element={<Inventario/>} />
          <Route path='/estadisticas' element={<Estadisticas/>} />
        <Route path='/' element={<Estadisticas/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;