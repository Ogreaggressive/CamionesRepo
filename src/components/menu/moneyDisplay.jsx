import React from 'react';
import useStyles from './moneyDisplayStyles'; // Importa los estilos

const MoneyDisplay = ({ ingresosMensuales }) => {
  const classes = useStyles(); // Utiliza los estilos

  return (
    <div className={classes.centerContainer}>
      <div className={classes.smallText}>
        Utilidad
      </div>
      <div className={classes.largeText}>
        Ingresos Mensuales: {ingresosMensuales} Bs
      </div>
    </div>
  );
}

export default MoneyDisplay;