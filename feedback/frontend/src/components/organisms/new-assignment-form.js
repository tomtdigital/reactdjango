import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAssignment } from '../../actions/assignments';

export const NewAssignmentForm = ({ connectAddAssignment }) => {
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
    connectAddAssignment(assignment);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="subject">
        subject
        <input
          id="subject"
          name="subject"
          onChange={e => setSubject(e.target.value)}
          value={subject || ''}
        />
      </label>
      <label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title || ''}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          id="description"
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description || ''}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

NewAssignmentForm.propTypes = {
  connectAddAssignment: PropTypes.func.isRequired,
};

export default connect(null, {
  connectAddAssignment: addAssignment,
})(NewAssignmentForm);
