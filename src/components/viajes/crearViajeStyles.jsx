import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
    },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  formItem: {
    marginBottom: '16px',
    '& label': {
      display: 'block',
      marginBottom: '8px',
    },
    '& input, & select, .react-datepicker-wrapper': {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    '& button': {
      backgroundColor: 'black',
      color: 'white',
      padding: '12px 24px',
      fontSize: '18px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      display: 'block',
      width: '100%',
    },
  },
  datePickerContainer: {
    '& .react-datepicker__header': {
      backgroundColor: '#f0f0f0', // Cambia el color de fondo como desees
      borderBottom: 'none', // Elimina el borde inferior negro
    },
    '& .react-datepicker__current-month': {
      color: '#333', // Cambia el color del texto como desees
    },
  },
}));

export default useStyles;