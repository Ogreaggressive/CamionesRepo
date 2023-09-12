import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './camionStyles';

const Camion = (props) => {
  const classes = useStyles();
  const { placa, licencia, carnet } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Camión {placa}
        </Typography>
        <Typography variant="subtitle1">Licencia: {licencia}</Typography>
        <Typography variant="subtitle1">Carnet: {carnet}</Typography>
        <Link to={`/gastosCamion?placa=${placa}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" className={classes.verGastosButton}>
            Ver Gastos
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Camion;