import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useStyles from './crearViajeStyles';

const CrearViaje = () => {
  const classes = useStyles();

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const handleAgregarClick = () => {
    // Lógica para agregar el nuevo viaje a tu estado global o componente ViajesContainer
    // ...

    // Redirige al usuario a la página de ViajesEnCurso
     navigateTo('/viajesEnCurso')
  };


  return (
    <div>
      <div className={classes.header}>
        <Link to="/viajesEnCurso">
          <IconContext.Provider value={{ size: '2rem' }}>
            <FiArrowLeft />
          </IconContext.Provider>
        </Link>
        <h2>Agregar Viaje</h2>
      </div>

      <form className={classes.form}>
        {/* Selección de camión */}
        {/* Aquí puedes agregar la lógica para elegir entre 4 camiones */}
        {/* Ejemplo: */}
        <div className={classes.formItem}>
          <label>Camión:</label>
          <select>
            <option>Camión 1</option>
            <option>Camión 2</option>
            <option>Camión 3</option>
            <option>Camión 4</option>
          </select>
        </div>

        {/* Lugar de inicio */}
        <div className={classes.formItem}>
          <label>Lugar de Inicio:</label>
          <input type="text" />
        </div>

        {/* Lugar de fin */}
        <div className={classes.formItem}>
          <label>Lugar de Fin:</label>
          <input type="text" />
        </div>

        {/* Fecha de partida */}
        <div className={`${classes.formItem} ${classes.datePickerContainer}`}>
            <label>Fecha de Partida:</label>
            <DatePicker
                selected={selectedStartDate}
                onChange={handleStartDateChange}
                dateFormat="dd/MM/yyyy"
            />
        </div>

        {/* Fecha de fin */}
        <div className={`${classes.formItem} ${classes.datePickerContainer}`}>
          <label>Fecha de Fin:</label>
          <DatePicker
            selected={selectedEndDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Selección de plan de viaje */}
        <div className={classes.formItem}>
          <label>Seleccionar Plan de Viaje:</label>
          {/* Aquí puedes agregar lógica para elegir un plan de viaje */}
        </div>

        {/* Selección de checklist */}
        <div className={classes.formItem}>
          <label>Seleccionar Checklist:</label>
          {/* Aquí puedes agregar lógica para elegir un checklist */}
        </div>

        {/* Botón Agregar */}
        <div className={classes.formItem}>
            <Link to="/viajesEnCurso" style={{ textDecoration: 'none', float: 'center' }}>
            <button>
              Agregar Viaje
            </button>
          </Link>
        </div>
      </form>
    </div>

    
  );
};

export default CrearViaje;