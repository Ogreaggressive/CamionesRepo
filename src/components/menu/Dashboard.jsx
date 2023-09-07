import React from 'react';
import MenuBarChart from './graphs/BarChart'; // Implementa la gráfica de barras
import useStyles from './DashboardStyles'; // Importa los estilos

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.barChart}>
        <h2>Gráfica de Barras</h2>
        <MenuBarChart/>
      </div>
    </div>
  );
}

export default Dashboard;