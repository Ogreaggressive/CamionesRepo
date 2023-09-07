import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  barChart: {
    flex: '1',
    border: '1px solid #ccc',
    padding: '20px',
  },
  listContainer: {
    flex: '1',
    border: '1px solid #ccc',
    padding: '20px',
    marginLeft: '20px', // Espacio entre gráfica de barras y lista
  },
  donutChart: {
    flex: '1',
    border: '1px solid #ccc',
    padding: '20px',
    marginLeft: '20px', // Espacio entre lista y gráfica de donut
  },
  // Agrega cualquier estilo adicional que necesites aquí
}));

export default useStyles;