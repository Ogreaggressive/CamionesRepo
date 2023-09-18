// Dashboard.jsx

import React, { useState, useEffect } from 'react';
import MenuBarChart from './graphs/BarChart'; // Implementa la gráfica de barras
import MenuPieCharts from './graphs/PieChart';
import ImpuestosList from './graphs/impuestosList';
import useStyles from './DashboardStyles'; // Importa los estilos

const Dashboard = ({ setIngresosMensuales, selectedMonth }) => {
  const classes = useStyles();
  
  // Estado para almacenar los datos de MenuBarChart
  const [ingresosPorCamion, setIngresosPorCamion] = useState(0);

  // Estado para almacenar los datos de ImpuestosList
  const [impuestos, setImpuestos] = useState(0);

  // Función para calcular el ingreso neto restando impuestos
  const calcularIngresoNeto = () => {
    // Realiza cálculos con ingresosPorCamion y los impuestos
    // y devuelve el resultado
    const ingresoNeto = ingresosPorCamion - impuestos
    return ingresoNeto;
  };

  // Calcula el ingreso neto
  const ingresoNeto = calcularIngresoNeto();

  // Efecto para calcular y actualizar los ingresos mensuales
  useEffect(() => {
    // Actualiza los ingresos mensuales utilizando setIngresosMensuales
    setIngresosMensuales(ingresoNeto);
    console.log(ingresoNeto)
  }, [ingresoNeto, setIngresosMensuales]);

  return (
    <div className={classes.container}>
      <div className={classes.barChart}>
        <h2>Ingreso por Camion</h2>
        <MenuBarChart
          setIngresosPorCamion={setIngresosPorCamion}
          selectedMonth={selectedMonth}
        />
      </div>
      <div className={classes.listContainer}>
        <h2>Lista impuestos</h2>
        <ImpuestosList setTotalImpuestos= {setImpuestos} />
      </div>
      <div className={classes.donutChart}>
        <h2>Egreso general</h2>
        <MenuPieCharts/>
      </div>
    </div>
  );
}
 
export default Dashboard;