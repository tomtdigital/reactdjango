import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAssignment } from '../../actions/assignments';
import Label from '../atoms/label';

export const NewAssignmentForm = ({ addAssignmentRdx }) => {
  const [subject, setSubject] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const resetForm = () => {
    setSubject('');
    setTitle('');
    setDescription('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const assignment = { subject, title, description };
    addAssignmentRdx(assignment);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="subject">
        Subject
        <input
          id="subject"
          name="subject"
          onChange={e => setSubject(e.target.value)}
          value={subject || ''}
        />
      </Label>
      <Label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title || ''}
        />
      </Label>
      <Label htmlFor="description">
        Description
        <input
          id="description"
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description || ''}
        />
      </Label>
      <button type="submit">Submit</button>
    </form>
  );
};

NewAssignmentForm.propTypes = {
  addAssignmentRdx: PropTypes.func.isRequired,
};

export default connect(null, {
  addAssignmentRdx: addAssignment,
})(NewAssignmentForm);
