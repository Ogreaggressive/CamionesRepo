import React from 'react';
import TopNavigationBar from '../components/menu/topNavigationBar'
import InventarioMenu from '../components/inventario/inventarioMenu';
import FormAgregarCamion from '../components/inventario/camiones/formAgregarCamion';

const AgregarCamion = () => {
  return (
    <div>
    <TopNavigationBar />
    <InventarioMenu />
    <FormAgregarCamion/>
    </div>
  );
}

export default AgregarCamion;