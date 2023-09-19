import React from 'react';
import Pago from './pago'; // Importa tu componente de tarjeta de pago
import useStyles from './pagosContainerStyles'; // Importa los estilos desde tu archivo pagosContainerStyles.js

const PagosContainer = () => {
  const classes = useStyles(); // Aplica los estilos utilizando la variable classes

  // Simula una lista de pagos (puedes reemplazarla con tus datos reales)
  const pagos = [
    {
      id: 1,
      nombre: 'Juan',
      valorMonetario: '200',
    },
    {
      id: 2,
      nombre: 'María',
      valorMonetario: '350',
    },
    {
      id: 3,
      nombre: 'Pedro',
      valorMonetario: '180',
    },
  ];

  return (
    <div className={classes.container}>
      {pagos.map((pago) => (
        <Pago key={pago.id} nombre={pago.nombre} valorMonetario={pago.valorMonetario} />
      ))}
    </div>
  );
};

export default PagosContainer;