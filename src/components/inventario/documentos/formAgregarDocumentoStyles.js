import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  greenBox: {
    background: '#8dd67c', // Verde
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '15px',
  },
  blueBox: {
    background: '#80b3d1', // Azul
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  textInput: {
    width: '100%',
  },
  imageUpload: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  uploadButton: {
    background: '#9C27B0', // Violeta
  },
  button: {
    background: '#4CAF50', // Verde
  },
  cancelButton: {
    marginRight: '10px',
    background: '#F44336', // Rojo
  },
  textBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '8px 0',
  },
  formContainer: {
    maxWidth: '100vw',
  },
}));

export default useStyles;