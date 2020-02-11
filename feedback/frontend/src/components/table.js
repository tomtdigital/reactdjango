import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`
`;

const Table = () => (
  <StyledTable>
    <thead>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </thead>
    <tbody>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tbody>
  </StyledTable>
);

// Table.propTypes = {
//   data: PropTypes.array,
// };

export default Table;
