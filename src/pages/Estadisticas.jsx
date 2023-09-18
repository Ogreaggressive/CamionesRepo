import React, { useState } from 'react';
import '../App.css';
import TopNavigationBar from '../components/menu/topNavigationBar';
import MonthMenu from '../components/menu/monthMenu';
import MoneyDisplay from '../components/menu/moneyDisplay';
import Dashboard from '../components/menu/Dashboard';

function Estadisticas() {
  // Define el estado local para los ingresos mensuales
  const [ingresosMensuales, setIngresosMensuales] = useState(0);

  // Define una función para actualizar los ingresos mensuales
  const actualizarIngresosMensuales = (nuevosIngresosMensuales) => {
    setIngresosMensuales(nuevosIngresosMensuales);
  };

  return (
    <div>
      <TopNavigationBar />
      <MonthMenu />
      <MoneyDisplay ingresosMensuales={ingresosMensuales} />
      <Dashboard
        setIngresosMensuales={actualizarIngresosMensuales}
        ingresosMensuales={ingresosMensuales}
      />
    </div>
  );
}

export default Estadisticas;