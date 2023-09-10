import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: '16px',
    padding: '16px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  verDocumentosButton: {
    marginTop: '16px',
  },
  fiscalInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
  fiscalItem: {
    textAlign: 'center',
  },
  transactionInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
  transactionItem: {
    textAlign: 'center',
  },
  balanceTitle: {
    marginTop: '16px',
  },
  balanceAmount: {
    fontSize: '24px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
}));

export default useStyles;