import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';

const Select = ({ label, value, onChange, children }) => {
  const shortName = label.replace(' ', '-').toLowerCase();
  return (
    <Label htmlFor={shortName}>
      {label}
      <select
        id={shortName}
        name={shortName}
        onChange={e => onChange(e.target.value)}
        value={value || ''}
      >
        {children}
      </select>
    </Label>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any,
};

export default Select;
