import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSubject } from '../../actions/subjects';
import Label from '../atoms/label';

export const NewSubjectForm = ({ addSubjectRdx }) => {
  const [subjectName, setSubjectName] = useState();

  const resetForm = () => {
    setSubjectName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    addSubjectRdx({ subject_name: subjectName });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="subject-name">
        Subject Name
        <input
          id="subject-name"
          name="subject-name"
          onChange={e => setSubjectName(e.target.value)}
          value={subjectName || ''}
        />
      </Label>
      <button type="submit">Submit</button>
    </form>
  );
};

NewSubjectForm.propTypes = {
  addSubjectRdx: PropTypes.func.isRequired,
};

export default connect(null, {
  addSubjectRdx: addSubject,
})(NewSubjectForm);
