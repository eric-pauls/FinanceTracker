import { useState, useEffect } from "react";
import Category from "./Category";
import Table from 'react-bootstrap/Table'


function CategoryTable({ categories, onDelete, onEdit }) {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/lineItems")
      .then((response) => response.json())
      .then((data) => setEntries(data));
  }, []);

  const sumForCategory = (category) => {
    if (!entries){return(null)}
    return entries.reduce((sum, entry) => {
      if (entry.category !== category) return sum;
      return sum + entry.amount;
    }, 0);
  }; 

  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Category</th>
          <th>Total Amount</th>
          <th>Expected Tearly Total</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, i) => (
          <Category
            category={category}
            sum={sumForCategory(category.category)}
            onDelete={onDelete}
            onEdit={onEdit}
            key={i}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;
