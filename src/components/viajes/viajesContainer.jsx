import React from 'react';
import Viaje from './viaje'; // Importa tu componente de tarjeta de viaje
import useStyles from './viajesContainerStyles';

const ViajesContainer = () => {
  const classes = useStyles();

  // Simula una lista de viajes (puedes reemplazarla con tus datos reales)
  const viajes = [
    {
      id: 1,
      titulo: 'Camión 1 de Cochabamba a La Paz',
      fecha: '14/2/23 a 12/3/23',
      creditoFiscal: '100 Bs.',
      debitoFiscal: '200 Bs.',
      ingreso: '3,000 Bs.',
      egreso: '2,000 Bs.',
      balance: '1,000 Bs.',
    },
    {
      id: 2,
      titulo: 'Camión 2 de La Paz a Santa Cruz',
      fecha: '10/3/23 a 20/3/23',
      creditoFiscal: '120 Bs.',
      debitoFiscal: '250 Bs.',
      ingreso: '2,500 Bs.',
      egreso: '1,800 Bs.',
      balance: '700 Bs.',
    },
    {
      id: 3,
      titulo: 'Camión 3 de Sucre a Tarija',
      fecha: '5/4/23 a 15/4/23',
      creditoFiscal: '80 Bs.',
      debitoFiscal: '180 Bs.',
      ingreso: '2,200 Bs.',
      egreso: '1,400 Bs.',
      balance: '800 Bs.',
    },
    {
        id: 4,
        titulo: 'Camión 4 de Oruro a Potosí',
        fecha: '20/4/23 a 30/4/23',
        creditoFiscal: '90 Bs.',
        debitoFiscal: '150 Bs.',
        ingreso: '2,800 Bs.',
        egreso: '1,600 Bs.',
        balance: '1,200 Bs.',
      },
  ];

  return (
    <div className={classes.container}>
        {viajes.map((viaje) => (
            <Viaje
            key={viaje.id}
            titulo={viaje.titulo}
            fecha={viaje.fecha}
            creditoFiscal={viaje.creditoFiscal}
            debitoFiscal={viaje.debitoFiscal}
            ingreso={viaje.ingreso}
            egreso={viaje.egreso}
            balance={viaje.balance}
            />
        ))}
    </div>
  );
};

export default ViajesContainer;