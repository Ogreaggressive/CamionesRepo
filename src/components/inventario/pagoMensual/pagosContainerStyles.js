import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px', // Espacio entre las tarjetas de viaje
    justifyContent: 'center', // Alinear las tarjetas al centro horizontalmente
  },
}));

export default useStyles;