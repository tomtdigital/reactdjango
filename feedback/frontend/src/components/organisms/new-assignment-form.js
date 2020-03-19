import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addAssignment } from '../../actions/assignments';
import { getSubjects } from '../../actions/subjects';
import Label from '../atoms/label';
import { useSortObjectArray } from '../../utils/use-sort-object-array';

export const NewAssignmentForm = ({
  subjects,
  addAssignmentRdx,
  getSubjectsRdx,
}) => {
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getSubjectsRdx();
  }, [getSubjectsRdx]);

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

  const sortObjectArray = useSortObjectArray;
  const sortedSubjects =
    subjects && subjects.sort(sortObjectArray('subject_name'));

  return (
    <>
      {subjects && subjects.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <Label htmlFor="subject">
            Subject
            <select
              id="subject"
              name="subject"
              onChange={e => setSubject(e.target.value)}
              value={subject || ''}
            >
              <option>---</option>
              {sortedSubjects.map((subj, index) => (
                <option key={index} value={subj.subject_name}>
                  {subj.subject_name}
                </option>
              ))}
            </select>
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
            <textarea
              id="description"
              name="description"
              onChange={e => setDescription(e.target.value)}
              value={description || ''}
            />
          </Label>
          {/* {subject.length > 0 && title.length > 0 && description.length > 0 && ( */}
          <button type="submit">Submit</button>
          {/* )} */}
        </form>
      ) : (
        <p>
          You must first <Link to="/subjects">create a subject</Link> before
          adding an assignment
        </p>
      )}
    </>
  );
};

NewAssignmentForm.propTypes = {
  subjects: PropTypes.array.isRequired,
  addAssignmentRdx: PropTypes.func.isRequired,
  getSubjectsRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: state.subjects.subjects,
});

export default connect(mapStateToProps, {
  addAssignmentRdx: addAssignment,
  getSubjectsRdx: getSubjects,
})(NewAssignmentForm);
