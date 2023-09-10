import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import useStyles from './viajeStyles';

const Viaje = (props) => {
  const classes = useStyles();

  const {
    titulo,
    fecha,
    creditoFiscal,
    debitoFiscal,
    ingreso,
    egreso,
    balance,
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="subtitle1">
          {fecha}
        </Typography>
        <Button variant="outlined" className={classes.verDocumentosButton}>
          Ver Documentos
        </Button>
        <div className={classes.fiscalInfo}>
          <div className={classes.fiscalItem}>
            <Typography variant="subtitle2">Crédito Fiscal</Typography>
            <Typography variant="body2">{creditoFiscal}</Typography>
          </div>
          <div className={classes.fiscalItem}>
            <Typography variant="subtitle2">Débito Fiscal</Typography>
            <Typography variant="body2">{debitoFiscal}</Typography>
          </div>
        </div>
        <div className={classes.transactionInfo}>
          <div className={classes.transactionItem}>
            <Typography variant="subtitle2">Ingreso</Typography>
            <Typography variant="body2">{ingreso}</Typography>
          </div>
          <div className={classes.transactionItem}>
            <Typography variant="subtitle2">Egreso</Typography>
            <Typography variant="body2">{egreso}</Typography>
          </div>
        </div>
        <Typography variant="h6" className={classes.balanceTitle}>
          Balance
        </Typography>
        <Typography variant="h6" className={classes.balanceAmount}>
          {balance}
        </Typography>
        <div className={classes.buttons}>
          <Button variant="contained" color="error">
            Marcar como terminado
          </Button>
          <Button variant="contained" color="primary">
            Nueva transacción +
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Viaje;