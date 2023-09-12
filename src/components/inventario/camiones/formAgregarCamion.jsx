import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from './formAgregarCamionStyles';
import { useNavigate } from 'react-router-dom';

const FormAgregarCamion = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Función para redirigir a /inventario
  const redirectToInventario = () => {
    navigate('/inventario');
  };
  return (
    <div className={classes.formContainer}>
      <div className={classes.greenBox}>
        <TextField
          label="Placa"
          variant="outlined"
          className={classes.textInput}
        />
        <div className={classes.imageUpload}>
          <label>Foto de Portada</label>
          <Button variant="contained" className={classes.uploadButton}>
            Subir
          </Button>
        </div>
      </div>

      <div className={classes.blueBox}>
        <div className={classes.textBlock}>
            <p>Calibración</p>
            <Button variant="contained" className={classes.button}>
            Subir
            </Button>
        </div>
        <div className={classes.textBlock}>
            <p>Verificación Volumétrica</p>
            <Button variant="contained" className={classes.button}>
            Subir
            </Button>
        </div>
        <div className={classes.textBlock}>
            <p>Licencia</p>
            <Button variant="contained" className={classes.button}>
            Subir
            </Button>
        </div>
        <div className={classes.textBlock}>
            <p>Carnet</p>
            <Button variant="contained" className={classes.button}>
            Subir
            </Button>
        </div>
        <div className={classes.textBlock}>
            <p>RUAT</p>
            <Button variant="contained" className={classes.button}>
            Subir
            </Button>
        </div>
        <div className={classes.textBlock}>
            <p>SOAT</p>
            <Button variant="contained" className={classes.button}>
            Subir
            </Button>
        </div>
        <div className={classes.textBlock}>
            <p>Cursos</p>
            <Button variant="contained" className={classes.button}>
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

export default FormAgregarCamion;