import React from 'react';
import './form-input.styles.scss';

/**
 * Functional Component
 * Becase we don't want any state.
 * Methds and Props to be passed down
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? 'shrik' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
