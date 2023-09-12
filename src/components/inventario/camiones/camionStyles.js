import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: '16px',
    padding: '16px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  verGastosButton: {
    marginTop: '16px',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
  item: {
    textAlign: 'center',
  },
}));

export default useStyles;