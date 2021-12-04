import { styled } from '@mui/material/styles';

const PREFIX = 'Copyright';
const classes = {
  root: `${PREFIX}-root`,
};

export const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  },
}));

export default classes;
