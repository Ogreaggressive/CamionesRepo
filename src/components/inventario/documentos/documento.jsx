// Documento.jsx
import React from 'react';
import documentosStyles from './documentoStyles';

const Documento = ({ nombre, fecha, datos }) => {
  const classes = documentosStyles();

  return (
    <div className={classes.documento}>
      <div className={classes.cuadroIzquierda}></div>
      <div className={classes.cuadroDerecha}>
        <h2>{nombre}</h2>
        <p>Fecha: {fecha}</p>
        <p>{datos}</p>
        <button className={classes.botonEliminar}>Eliminar</button>
      </div>
    </div>
  );
};

export default Documento;