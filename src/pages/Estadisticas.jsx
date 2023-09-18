import React, { useState } from 'react';
import '../App.css';
import TopNavigationBar from '../components/menu/topNavigationBar';
import MonthMenu from '../components/menu/monthMenu';
import MoneyDisplay from '../components/menu/moneyDisplay';
import Dashboard from '../components/menu/Dashboard';

function Estadisticas() {
  // Define el estado local para los ingresos mensuales
  const [ingresosMensuales, setIngresosMensuales] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('');

  // Define una función para actualizar los ingresos mensuales
  const actualizarIngresosMensuales = (nuevosIngresosMensuales) => {
    setIngresosMensuales(nuevosIngresosMensuales);
  };

  // Función para manejar el cambio de mes
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div>
      <TopNavigationBar />
      <MonthMenu onMonthChange={handleMonthChange} />
      <MoneyDisplay ingresosMensuales={ingresosMensuales} />
      <Dashboard
        setIngresosMensuales={actualizarIngresosMensuales}
        ingresosMensuales={ingresosMensuales}
        selectedMonth={selectedMonth}
      />
    </div>
  );
}

export default Estadisticas;