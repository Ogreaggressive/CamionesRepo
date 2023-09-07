import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  monthMenuContainer: {
    display: 'inline-block',
  },
  monthSelect: {
    minWidth: '150px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  // Agrega cualquier estilo adicional que necesites aquí
}));

export default useStyles;