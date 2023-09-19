import React from 'react';
import TopNavigationBar from '../components/menu/topNavigationBar'
import InventarioMenu from '../components/inventario/inventarioMenu';
import DocumentosContainer from '../components/inventario/documentos/documentosContainer';

const Documentos = () => {
  return (
    <div>
    <TopNavigationBar />
    <InventarioMenu />
    <DocumentosContainer/>
    </div>
  );
}

export default Documentos;