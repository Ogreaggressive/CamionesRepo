import { makeStyles } from '@mui/styles';

const useStylesNav = makeStyles((theme) => ({
  topNav: {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    padding: '10px',
    marginTop: '20px', // Agregamos un margen superior
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
    padding: '10px',
    cursor: 'pointer',
    border: '1px solid #fff', // Agregamos un borde
    borderRadius: '5px', // Agregamos bordes redondeados
    transition: 'background-color 0.3s', // Agregamos una transición suave al color de fondo
  },
  navItemHover: {
    '&:hover': {
      backgroundColor: '#555',
    },
  },
}));

export default useStylesNav;