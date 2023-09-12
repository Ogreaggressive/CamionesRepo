import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px', // Espacio entre las tarjetas de camión
    justifyContent: 'center', // Alinear las tarjetas al centro horizontalmente
  },
  titulo: {
    textAlign: 'center', // Centrar el título horizontalmente
    marginBottom: '16px', // Espacio entre el título y las tarjetas
  },
}));

export default useStyles;