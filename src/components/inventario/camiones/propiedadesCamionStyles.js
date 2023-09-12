import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '16px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  propertiesContainer: {
    border: '2px solid darkblue',
    borderRadius: '8px',
    backgroundColor: 'lightblue',
    padding: '16px',
    width: '80%',
  },
  propertyItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  propertyName: {
    fontSize: '18px',
  },
  viewButton: {
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: '4px',
    padding: '4px 8px',
    cursor: 'pointer',
  },
}));

export default useStyles;