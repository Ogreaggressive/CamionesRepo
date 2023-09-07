import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    flexDirection: 'column'
  },
  largeText: {
    fontSize: '48px',
    textAlign: 'center',
  },
  smallText: {
    fontSize: '24px',
    textAlign: 'center',
  },
}));

export default useStyles;