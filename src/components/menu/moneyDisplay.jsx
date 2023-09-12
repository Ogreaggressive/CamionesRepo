import React, { useState } from 'react';
import useStyles from './moneyDisplayStyles'; // Importa los estilos

const MoneyDisplay = () => {
  const classes = useStyles(); // Utiliza los estilos

  const [bolivianosValue, setBolivianosValue] = useState(19525.50);

  // Función para cambiar el valor en bolivianos
  const changeValue = () => {
    // Puedes cambiar el valor aquí según tus necesidades
    setBolivianosValue(2500.75); // Ejemplo de cambio de valor
  };

  return (
    <div className={classes.centerContainer}>
    <div className={classes.smallText}>
        Utilidad
      </div>
      <div className={classes.largeText}>
        Valor en Bolivianos: {bolivianosValue} Bs
      </div>
    </div>
  );
}

export default MoneyDisplay;