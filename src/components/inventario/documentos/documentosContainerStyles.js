// documentosContainerStyles.js
import { makeStyles } from '@mui/styles';

const documentosContainerStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center', // Para mostrar los documentos lado a lado
    flexWrap: 'wrap', // Para que los documentos pasen a la siguiente línea si no caben en el ancho disponible
  },
}));

export default documentosContainerStyles;