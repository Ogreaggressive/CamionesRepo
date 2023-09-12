import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import useStyles from './propiedadesCamionStyles';

const PropiedadesCamion = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Propiedades
      </Typography>
      <Card className={classes.propertiesContainer}>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            Calibración
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            Verificación Volumétrica
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            Licencia
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            Carnet
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            RUAT
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            SOAT
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        <div className={classes.propertyItem}>
          <Typography variant="subtitle1" className={classes.propertyName}>
            Cursos
          </Typography>
          <Button variant="contained" className={classes.viewButton}>
            Ver
          </Button>
        </div>
        {/* Agrega más propiedades si es necesario */}
      </Card>
    </div>
  );
};

export default PropiedadesCamion;