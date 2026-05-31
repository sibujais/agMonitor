import React from 'react';

const DataTable = ({ data, onSort }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th
  className="sortable"
  onClick={() => onSort('district')}
>
  District ↕
</th>

            <th onClick={() => onSort('species')}>
              Species
            </th>

            <th onClick={() => onSort('treesPlanted')}>
              Trees Planted
            </th>

            <th onClick={() => onSort('plantingDate')}>
              Planting Date
            </th>

            <th onClick={() => onSort('healthStatus')}>
              Health Status
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map(record => (
            <tr key={record.id}>
              <td>{record.district}</td>
              <td>{record.species}</td>
              <td>{record.treesPlanted}</td>
              <td>{record.plantingDate}</td>
              <td>{record.healthStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;