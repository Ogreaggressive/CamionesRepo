import React from 'react';
import TopNavigationBar from '../components/menu/topNavigationBar';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import PropiedadesCamion from '../components/inventario/camiones/propiedadesCamion';

const GastosCamion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const placa = searchParams.get('placa');

  return (
    <div>
      <TopNavigationBar />
      <h2>Gastos del Camión con Placa: {placa}</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <img
            src="src\images\camion.jpg" // Reemplaza con la ruta de tu imagen
            alt="Imagen del camión"
            style={{ maxWidth: '200px', marginRight: '20px' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <PropiedadesCamion />
        </div>
      </div>
    </div>
  );
};

export default GastosCamion;