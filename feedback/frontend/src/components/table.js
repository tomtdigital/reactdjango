import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const StyledTable = styled.table`
  thead tr th, tbody tr td {
    border: 1px solid black;
    padding: 1em;
  }
  border-collapse: collapse;
`;

const Table = () => {
  const [assignments, setAssignments] = useState();
  const [assignmentSubject, setassignmentSubject] = useState();
  const [assignmentTitle, setAssignmentTitle] = useState();
  const [assignmentDescription, setAssignmentDescription] = useState();
  useEffect(()=>{
    axios({
      method: 'get',
      url: '/api/assignments',
    })
    .then(function (response) {
      setAssignments(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  });
  
  const handleClick = id => {
    axios({
      method: 'delete',
      url: `/api/assignments/${id}`,
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
  });
};

const handleSubmit = () => {
  axios({
    method: 'post',
    url: '/api/assignments/',
    data: {
      subject: assignmentSubject,
      title: assignmentTitle,
      description: assignmentDescription
    }
  }).then(function (response) {
    console.log(response)
    setassignmentSubject('')
    setAssignmentTitle('')
    setAssignmentDescription('')
  })
  .catch(function (error) {
    console.log(error);
});
};
console.log(assignments);
  return (
  <>
  {assignments && assignments.length > 0 ? (
    <StyledTable>
    <thead>
    <tr>
      <th>Subject</th>
      <th>Title</th>
      <th>Description</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {assignments.map((assignment, index) => (
    <tr key={index}>
    <td>{assignment.subject}</td>
    <td>{assignment.title}</td>
    <td>{assignment.description}</td>
    <td><button onClick={() => handleClick(assignment.id)}>Delete</button></td>
  </tr>
    ))}
    </tbody>
  </StyledTable>
    ) : (
      <p>Fill out the form to create an assignment</p>
      ) }
  
  <br />
  <h2>Create Assignment</h2>
  <form>
    <label for="subject">Subject</label>
    <input id="subject" name ="subject" onChange={e => setassignmentSubject(e.target.value)} value={assignmentSubject} />
    <label for="title">Title</label>
    <input id="title" name ="title" onChange={e => setAssignmentTitle(e.target.value)} value={assignmentTitle} />
    <label for="description">Description</label>
    <input id="description" name ="description" onChange={e => setAssignmentDescription(e.target.value)} value={assignmentDescription} />
    <button type="button" onClick={handleSubmit}>Submit</button>
  </form>
    </>
);
};

// Table.propTypes = {
//   data: PropTypes.array,
// };

export default Table;
