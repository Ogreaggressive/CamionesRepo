import React from 'react';
import TopNavigationBar from '../components/menu/topNavigationBar'
import InventarioMenu from '../components/inventario/inventarioMenu';
import FormAgregarDocumento from '../components/inventario/documentos/formAgregarDocumento';

const AgregarDocumento = () => {
  return (
    <div>
    <TopNavigationBar />
    <InventarioMenu />
    <FormAgregarDocumento/>
    </div>
  );
}

export default AgregarDocumento;