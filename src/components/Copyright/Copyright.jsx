import * as React from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import classes, { Root } from './CopyrightStyles';

const Copyright = () => (
  <Root className={classes.root}>
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Root>
);

export default Copyright;
