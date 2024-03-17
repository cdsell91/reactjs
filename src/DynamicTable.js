import React from 'react';
import { Table } from 'react-bootstrap';

function DynamicTable({ data }) {

  const getKeys = () => {
    if (data.length === 0) return [];
    return Object.keys(data[0]);
  };

  const renderHeader = () => {
    const keys = getKeys();
    return keys.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  };

  const renderBody = () => {
    return data.map((item, index) => {
      const values = Object.values(item);
      return (
        <tr key={index}>
          {values.map((value, index) => <td key={index}>{value}</td>)}
        </tr>
      );
    });
  };

  return (
    <Table striped bordered hover>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
    </Table>
  );
}

export default DynamicTable;