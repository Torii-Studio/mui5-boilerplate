import * as React from 'react';
import PropTypes from 'prop-types';

import classes, { Root } from './CustomButtonStyles';

const CustomButton = ({ children, variant, endIcon }) => (
  <Root variant={variant} className={classes.root} endIcon={endIcon}>
    {children}
  </Root>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  variant: PropTypes.string,
};

export default CustomButton;
