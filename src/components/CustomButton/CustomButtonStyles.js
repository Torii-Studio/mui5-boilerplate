import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PREFIX = 'CustomButton';
const classes = {
  root: `${PREFIX}-root`,
};

export const Root = styled(Button)(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.black,
    color: theme.palette.white,

    '&:hover': {
      backgroundColor: theme.palette.black,
      color: theme.palette.white,
    },

    '&.MuiButton-outlined': {
      borderColor: 'none',
      borderRadius: 40,
    },
  },
}));

export default classes;
