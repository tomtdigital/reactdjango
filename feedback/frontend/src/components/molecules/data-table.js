import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../atoms/table';

const DataTable = ({ data, enableDeletion, onDeletion, linkPath }) => (
  <Table>
    <thead>
      <tr>
        {data.columns.map((column, columnIndex) => (
          <th key={columnIndex}>{column}</th>
        ))}
        {linkPath && <th>View</th>}
        {enableDeletion && <th>Delete</th>}
      </tr>
    </thead>
    <tbody>
      {data.rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.values.map((value, valueIndex) => (
            <td key={valueIndex}>{value}</td>
          ))}
          {linkPath && (
            <td>
              <Link to={`${linkPath}/${row.id}`}>View</Link>{' '}
            </td>
          )}
          {enableDeletion && (
            <td>
              <button onClick={() => onDeletion(row.id)} type="button">
                Delete
              </button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </Table>
);

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
  linkPath: PropTypes.string,
  enableDeletion: PropTypes.bool,
  onDeletion: PropTypes.func,
};

export default DataTable;
