import React from 'react';
import './custom-button.styles.scss';

/**
 * Functional Component
 * Children: pull children of the props
 * Destructure other props and destructure into custom button
 */
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
