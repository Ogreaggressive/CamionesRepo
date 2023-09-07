import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#f2f2f2',
      fontWeight: 'bold',
      padding: '8px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    buttonPaid: {
        backgroundColor: 'lightblue', // Color para estado "Pagado"
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
      },
      buttonUnpaid: {
        backgroundColor: 'red', // Color para estado "Por Pagar"
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
      },
  }));

export default useStyles;