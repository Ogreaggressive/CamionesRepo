import React from 'react';
import TopNavigationBar from '../components/menu/topNavigationBar'
import InventarioMenu from '../components/inventario/inventarioMenu';
import PagosContainer from '../components/inventario/pagoMensual/pagosContainer';

const PagosMensuales = () => {
  return (
    <div>
    <TopNavigationBar />
    <InventarioMenu />
    <PagosContainer/>
    </div>
  );
}

export default PagosMensuales;