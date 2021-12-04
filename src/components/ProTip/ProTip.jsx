import * as React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

import classes, { Root } from './ProTipStyles';

const ProTip = ({ children }) => (
  <Root className={classes.root}>
    <Typography variant="body1" color="text.secondary" className={classes.text}>
      {children}
    </Typography>
  </Root>
);

ProTip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default ProTip;
