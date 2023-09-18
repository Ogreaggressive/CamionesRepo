import React, { useState, useEffect } from 'react';
import useStyles from './impuestosListStyles'; // Importa los estilos
import { impuestosData } from '../../../mocks/mockImpuestosValues'; // Importa los valores de ejemplo de impuestos

const ImpuestosList = ({ setTotalImpuestos, selectedMonth }) => {
  const classes = useStyles();
  console.log(selectedMonth)

  const [impuestos, setImpuestos] = useState(
    impuestosData[selectedMonth.toLowerCase()] || impuestosData['enero']
  );
  
    useEffect(() => {
    // Aquí puedes actualizar impuestos usando setImpuestos si es necesario
    // Por ejemplo, para cambiar los impuestos cuando selectedMonth cambia
    const nuevosImpuestos = impuestosData[selectedMonth.toLowerCase()] || impuestosData['enero'];
    setImpuestos(nuevosImpuestos);
  
    // Resto del useEffect
  }, [selectedMonth, setTotalImpuestos]);

  useEffect(() => {
    // Filtra los impuestos para incluir solo IVA e IT
    const filteredImpuestos = impuestos.filter(
      (impuesto) => impuesto.nombre === 'IVA' || impuesto.nombre === 'IT'
    );

    // Calcula la suma de los montos de IVA e IT pagados
    const totalImpuestos = filteredImpuestos.reduce(
      (accumulator, impuesto) =>
        impuesto.pagado ? accumulator + impuesto.monto : accumulator,
      0
    );

    // Llama a la función para pasar el valor de los impuestos totales al componente padre
    setTotalImpuestos(totalImpuestos);
  }, [impuestos, setTotalImpuestos]);

  const togglePago = (id) => {
    // Copia el array de impuestos y actualiza el estado de pago del elemento correspondiente.
    const updatedImpuestos = impuestos.map((impuesto) =>
      impuesto.id === id ? { ...impuesto, pagado: !impuesto.pagado } : impuesto
    );
    setImpuestos(updatedImpuestos);
  };

  return (
    <div className={classes.root}>
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