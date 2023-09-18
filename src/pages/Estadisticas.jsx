import React, { useState } from 'react';
import '../App.css';
import TopNavigationBar from '../components/menu/topNavigationBar';
import MonthMenu from '../components/menu/monthMenu';
import MoneyDisplay from '../components/menu/moneyDisplay';
import Dashboard from '../components/menu/Dashboard';

function Estadisticas() {
  // Define una función para actualizar los ingresos mensuales
  const setIngresosMensuales = (nuevosIngresosMensuales) => {
    // Puedes hacer algo con los nuevos ingresos mensuales aquí
    console.log('Nuevos ingresos mensuales:', nuevosIngresosMensuales);
  };

  return (
    <div>
      <TopNavigationBar />
      <MonthMenu />
      <MoneyDisplay />
      <Dashboard setIngresosMensuales={setIngresosMensuales} />
    </div>
  );
}

export default Estadisticas;