import React from "react";
import LineItem from "./LineItem";
import Table from 'react-bootstrap/Table'

function LineItemTable({ lineItems, onDelete, onEdit }) {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {lineItems.map((lineItem, i) => (
          <LineItem
            lineItem={lineItem}
            onDelete={onDelete}
            onEdit={onEdit}
            key={i}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default LineItemTable;
