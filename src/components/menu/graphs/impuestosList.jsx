import React, { useState } from 'react';
import useStyles from './impuestosListStyles'; // Importa los estilos

const ImpuestosList = () => {
    const classes = useStyles();
  
    const [impuestos, setImpuestos] = useState([
      {
        id: 1,
        nombre: 'IVA',
        tipo: 'Mensual',
        monto: 400,
        pagado: true,
      },
      {
        id: 2,
        nombre: 'IT',
        tipo: 'Mensual',
        monto: 500,
        pagado: false,
      },
      {
        id: 3,
        nombre: 'IUE',
        tipo: 'Anual',
        monto: 1400,
        pagado: true,
      },
    ]);
  
    const togglePago = (id) => {
      // Copia el array de impuestos y actualiza el estado de pago del elemento correspondiente.
      const updatedImpuestos = impuestos.map((impuesto) =>
        impuesto.id === id ? { ...impuesto, pagado: !impuesto.pagado } : impuesto
      );
      setImpuestos(updatedImpuestos);
    };
  
    return (
      <div className={classes.root}>
        <h2>Lista de Elementos</h2>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.th}>#</th>
              <th className={classes.th}>Impuesto</th>
              <th className={classes.th}>Tipo</th>
              <th className={classes.th}>Monto</th>
              <th className={classes.th}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {impuestos.map((impuesto) => (
              <tr key={impuesto.id}>
                <td className={classes.td}>{impuesto.id}</td>
                <td className={classes.td}>{impuesto.nombre}</td>
                <td className={classes.td}>{impuesto.tipo}</td>
                <td className={classes.td}>{impuesto.monto} Bs.</td>
                <td className={classes.td}>
                  <button
                    className={
                      impuesto.pagado
                        ? classes.buttonPaid
                        : classes.buttonUnpaid
                    }
                    onClick={() => togglePago(impuesto.id)}
                  >
                    {impuesto.pagado ? 'Pagado' : 'Por Pagar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ImpuestosList;