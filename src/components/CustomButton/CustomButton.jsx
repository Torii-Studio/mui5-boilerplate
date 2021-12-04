import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import Button from '@mui/material/Button';

import styles from './CustomButtonStyles';

const CustomButton = ({ classes, children, variant, endIcon }) => (
  <Button variant={variant} className={classes.root} endIcon={endIcon}>
    {children}
  </Button>
);

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  variant: PropTypes.string,
};

export default withStyles(styles)(CustomButton);
