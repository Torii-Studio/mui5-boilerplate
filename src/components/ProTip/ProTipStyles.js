import { styled } from '@mui/material/styles';

const PREFIX = 'PropTip';
const classes = {
  root: `${PREFIX}-root`,
  text: `${PREFIX}-text`,
};

export const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
  },
  [`& .${classes.text}`]: {
    marginTop: 48,
    marginBottom: 24,
  },
}));

export default classes;
