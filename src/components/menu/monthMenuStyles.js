import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  monthMenuContainer: {
    display: 'inline-block',
    marginTop: '10px',
  },
  monthSelect: {
    minWidth: '150px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '24px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  // Agrega cualquier estilo adicional que necesites aquí
}));

export default useStyles;