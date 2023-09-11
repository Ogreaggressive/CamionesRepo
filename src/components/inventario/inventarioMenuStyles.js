// InventarioMenuStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px 20px',
  },
  menu: {
    flex: 1,
    '& ul': {
      listStyle: 'none',
      padding: 0,
      '& li': {
        marginBottom: '8px',
        '& a': {
          textDecoration: 'none',
          color: 'black',
          display: 'block',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.2s',
        },
        '& a:hover': {
          backgroundColor: '#ddd',
        },
      },
    },
  },
  active: {
    backgroundColor: '#ddd',
    fontWeight: 'bold',
  },
  agregarButton: {
    marginLeft: '20px',
    '& button': {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
  },
}));

export default useStyles;