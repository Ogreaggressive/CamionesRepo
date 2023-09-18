import React, { useState } from 'react';
import useStyles from './monthMenuStyles';

const MonthMenu = ({ onMonthChange }) => {
  const classes = useStyles();
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);

    // Llama a la función callback con el mes seleccionado
    onMonthChange(month);
  };

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className={classes.monthMenuContainer}>
      <select
        value={selectedMonth}
        onChange={handleChange}
        className={classes.monthSelect}
      >
        <option value="" disabled>Selecciona un mes</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MonthMenu;