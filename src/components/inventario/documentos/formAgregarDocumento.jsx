import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from './formAgregarDocumentoStyles';
import { useNavigate } from 'react-router-dom';

const FormAgregarDocumento = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Función para redirigir a /inventario
  const redirectToInventario = () => {
    navigate('/documentos');
  };
  return (
    <div className={classes.formContainer}>
      <div className={classes.greenBox}>
        <TextField
          label="Documento"
          variant="outlined"
          className={classes.textInput}
        />
        <div className={classes.imageUpload}>
          <label>Foto del documento</label>
          <Button variant="contained" className={classes.uploadButton}>
            Subir
          </Button>
        </div>
      </div>
        <div className={classes.buttons}>
        <Button
          variant="contained"
          className={classes.cancelButton}
          onClick={redirectToInventario}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={redirectToInventario}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default FormAgregarDocumento;