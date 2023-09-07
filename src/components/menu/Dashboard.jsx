import React from 'react';
import MenuBarChart from './graphs/BarChart'; // Implementa la gráfica de barras
import MenuPieCharts from './graphs/PieChart';
import ImpuestosList from './graphs/impuestosList';
import useStyles from './DashboardStyles'; // Importa los estilos

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.barChart}>
        <h2>Gráfica de Barras</h2>
        <MenuBarChart/>
      </div>
      <div className={classes.listContainer}>
        <h2>Lista impuestos</h2>
        <ImpuestosList />
      </div>
      <div className={classes.donutChart}>
        <h2>Gráfica de donut</h2>
        <MenuPieCharts/>
      </div>
    </div>
  );
}

export default Dashboard;