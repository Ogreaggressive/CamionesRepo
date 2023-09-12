import React from 'react';
import TopNavigationBar from '../components/menu/topNavigationBar'
import InventarioMenu from '../components/inventario/inventarioMenu';
import CamionesContainer from '../components/inventario/camiones/camionesContainer';

const Inventario = () => {
  return (
    <div>
    <TopNavigationBar />
    <InventarioMenu />
    <CamionesContainer />
    </div>
  );
}

export default Inventario;