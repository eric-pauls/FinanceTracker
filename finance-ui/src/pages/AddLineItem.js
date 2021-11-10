import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DropDown from '../components/CategoryDropDown';

const today = new Date();
const currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

/* 
How to get categories in a seprate dropdown component:
1. Fetch categories
2. Save categories in state
3. Render them in dropdown :)
*/

const AddLineItem = () => {
  const [date, setDate] = useState(currentDate);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const history = useHistory();

  

  const addLineItem = async () => {
    const newLineItem = { date, description, category, amount };
    const response = await fetch("http://localhost:8080/lineItems", {
      method: "POST",
      body: JSON.stringify(newLineItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Line item added successfully");
    } else {
      alert(`Failed to add line item, status code = ${response.status}`);
    }
    history.push("/AllLineItems");
  };

  let formAction = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formAction}>
        <h1>Add Line Item</h1>
        <div>
          <label for="date">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label for="descripton">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <DropDown category={category} onCategoryChange={setCategory}/>
        </div>
        <div>
          <label for="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button onClick={addLineItem}>Add Line Item</button>
      </form>
    </div>
  );
};

export default AddLineItem;
