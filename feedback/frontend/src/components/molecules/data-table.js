import React from 'react';
import PropTypes from 'prop-types';
import Table from '../atoms/table';

const DataTable = ({ data, deleteOption, deleteFunction }) => (
  <Table>
    <thead>
      <tr>
        {data.columns.map((column, columnIndex) => (
          <th key={columnIndex}>{column}</th>
        ))}
        {deleteOption && <th>Delete</th>}
      </tr>
    </thead>
    <tbody>
      {data.rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.values.map((value, valueIndex) => (
            <td key={valueIndex}>{value}</td>
          ))}
          {deleteOption && (
            <td>
              <button onClick={() => deleteFunction(row.id)} type="button">
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
  deleteOption: PropTypes.bool,
  deleteFunction: PropTypes.func,
};

export default DataTable;
