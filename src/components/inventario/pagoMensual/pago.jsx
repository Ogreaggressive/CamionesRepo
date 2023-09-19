import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import useStyles from './pagoStyles'; // Importa los estilos desde el archivo pagoStyles.js

const Pago = ({ nombre, valorMonetario }) => {
  const classes = useStyles(); // Aplica los estilos utilizando la variable classes

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Pago {nombre}
        </Typography>
        <Typography variant="body1">Valor Monetario: {valorMonetario} Bs.</Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Cambiar
        </Button>
        <Button variant="contained" color="error" className={classes.button}>
          Eliminar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Pago;