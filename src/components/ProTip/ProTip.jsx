import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from './ProTipStyles';

const ProTip = ({ classes, children }) => (
  <Box className={classes.root}>
    <Typography variant="body1" className={classes.text} color="text.secondary">
      {children}
    </Typography>
  </Box>
);

ProTip.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default withStyles(styles)(ProTip);
