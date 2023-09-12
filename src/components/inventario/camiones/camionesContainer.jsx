import React from 'react';
import Camion from './camion'; // Importa tu componente de tarjeta de camión
import useStyles from './camionesContainerStyles';

const CamionesContainer = () => {
  const classes = useStyles();

  // Simula una lista de camiones (puedes reemplazarla con tus datos reales)
  const camiones = [
    {
      id: 1,
      placa: 'ABC-123',
      licencia: 'Licencia 12345',
      carnet: 'Carnet 67890',
    },
    {
      id: 2,
      placa: 'XYZ-789',
      licencia: 'Licencia 54321',
      carnet: 'Carnet 09876',
    },
    {
      id: 3,
      placa: 'DEF-456',
      licencia: 'Licencia 67890',
      carnet: 'Carnet 23456',
    },
  ];

  return (
    <div>
      <div className={classes.titulo}>
        <h2>Listado de Camiones</h2>
      </div>
      <div className={classes.container}>
        {camiones.map((camion) => (
          <Camion
            key={camion.id}
            placa={camion.placa}
            licencia={camion.licencia}
            carnet={camion.carnet}
          />
        ))}
      </div>
    </div>
  );
};

export default CamionesContainer;