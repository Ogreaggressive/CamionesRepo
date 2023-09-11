import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '300px',
    padding: '20px',
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeIcon: {
    cursor: 'pointer',
  },
  form: {
    marginTop: '20px',
  },
  formItem: {
    marginBottom: '10px',
  },
  addButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}));

export default useStyles;