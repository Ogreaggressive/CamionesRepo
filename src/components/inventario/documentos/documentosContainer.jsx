// DocumentosContainer.jsx
import React from 'react';
import Documento from './documento';
import documentosContainerStyles from './documentosContainerStyles';

const DocumentosContainer = () => {
  const classes = documentosContainerStyles();

  // Datos de ejemplo para tres documentos
  const documentosData = [
    {
      nombre: 'Documento 1',
      fecha: '01/01/2023',
      datos: 'Pagos camion 1 en enero',
    },
    {
      nombre: 'Documento 2',
      fecha: '02/01/2023',
      datos: 'Datos de informe 2023',
    },
    {
      nombre: 'Documento 3',
      fecha: '03/01/2023',
      datos: 'Nueva entrega de proyecto',
    },
  ];

  return (
    <div>
        <div className={classes.titulo}>
        <h2>Listado de Documentos</h2>
      </div>
        <div className={classes.container}>
        {documentosData.map((documento, index) => (
            <Documento
            key={index}
            nombre={documento.nombre}
            fecha={documento.fecha}
            datos={documento.datos}
            />
        ))}
        </div>
    </div>
  );
};

export default DocumentosContainer;