// NuevaTransaccion.jsx
import React, { useState } from 'react';
import useStyles from './nuevaTransaccionStyles';

const NuevaTransaccion = ({ onClose, onAddTransaction }) => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('Viaticos');
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [factura, setFactura] = useState('');

  const handleAddTransaction = () => {
    // Crea un objeto con la información ingresada
    const nuevaTransaccion = {
      opcion: selectedOption,
      monto,
      descripcion,
      factura,
    };

    // Imprime la información en la consola
    console.log(nuevaTransaccion);

    // Llama a la función para agregar la transacción
    onAddTransaction(nuevaTransaccion);

    // Cierra el componente
    onClose();
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span className={classes.closeIcon} onClick={onClose}>X</span>
        <h2>Nueva Transacción</h2>
      </div>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <label>Tipo de Transacción:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Viaticos">Viaticos</option>
            <option value="Mermas">Mermas</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Gasto adicional">Gasto adicional</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Monto:</label>
          <input
            type="text"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <label>Factura:</label>
          <input
            type="text"
            value={factura}
            onChange={(e) => setFactura(e.target.value)}
          />
        </div>
      </div>
      <button className={classes.addButton} onClick={handleAddTransaction}>
        Agregar
      </button>
    </div>
  );
};

export default NuevaTransaccion;