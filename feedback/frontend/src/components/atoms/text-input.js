import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';

const TextInput = ({ label, type, value, onChange }) => {
  const shortName = label.replace(' ', '-').toLowerCase();
  return (
    <Label htmlFor={shortName}>
      {label}
      <input
        id={shortName}
        type={type}
        name={shortName}
        onChange={e => onChange(e.target.value)}
        value={value || ''}
      />
    </Label>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
