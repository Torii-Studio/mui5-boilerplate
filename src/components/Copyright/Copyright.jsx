import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import styles from './CopyrightStyles';

const Copyright = ({ classes }) => (
  <Box className={classes.root}>
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);

Copyright.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Copyright);
