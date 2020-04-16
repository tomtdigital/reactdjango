import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';

const TextArea = ({ label, cols, rows, value, onChange }) => {
  const shortName = label.replace(' ', '-').toLowerCase();
  return (
    <Label htmlFor={shortName}>
      {label}
      <textarea
        id={shortName}
        cols={cols || 30}
        rows={rows || 5}
        name={shortName}
        onChange={e => onChange(e.target.value)}
        value={value || ''}
      />
    </Label>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
