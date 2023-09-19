// documentoStyle.js
import { makeStyles } from '@mui/styles';

const documentoStyles = makeStyles((theme) => ({
    documento: {
      display: 'flex',
      border: '1px solid #000',
      marginBottom: '16px',
      padding: '8px',
      alignItems: 'center',
      marginLeft: '20px',
      marginRight: '20px',
    },
    cuadroIzquierda: {
      width: '100px',
      height: '100px',
      backgroundColor: 'white', // Color del cuadro izquierdo
      border: '1px solid #000', // Borde negro
      marginRight: '16px',
    },
    cuadroDerecha: {
      flex: 1,
    },
    botonEliminar: {
      backgroundColor: '#e62c1c', // Color rojo
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  }));
  
  export default documentoStyles;