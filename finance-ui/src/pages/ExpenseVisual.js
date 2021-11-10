import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pie from "../components/Pie.js";

const testData = [
  { category: "Income", total: 5000 },
  { category: "Assets", total: 500 },
  { category: "Miscellaneous", total: 40 },
  { category: "Entertainment", total: 250 },
  { category: "Home", total: 250 },
  { category: "Personal/Health", total: 400 },
];

// make 'data' a fetch of all categories
//modify categories to meet criteria of service
// make a select that allows user to selct categories they want to exclude

const ExpenseVisual = () => {
  const [graphData, setGraphData] = useState();
  const [entries, setEntries] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/lineItems")
      .then((response) => response.json())
      .then((data) => setEntries(data));
  }, []);

  const sumForCategory = (category) => {
    if (!entries) {
      return null;
    }
    return entries.reduce((sum, entry) => {
      if (entry.category !== category) return sum;
      return sum + entry.amount;
    }, 0);
  };

  const loadCategories = async () => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const categoryTotals = [];
  for (let i = 0; i < categories.length; i++) {
    let holder = {};
    holder["category"] = categories[i].category;
    holder["total"] = sumForCategory(categories[i].category);
    categoryTotals.push(holder);
  }


  const baseURL = "http://flip1.engr.oregonstate.edu:29298/";

  function onSend() {
    axios({
      method: "POST",
      url: baseURL,
      headers: {
        Accept: "application/json",
      },
      data: {
        exclude: ["Income", "Assets"],
        data: categoryTotals,
      },
    }).then(function (response) {
      setGraphData(response.data);
    });
  }

  return (
    <div>
      <h1>Visualization of My Expenses</h1>
      <div>{graphData && <Pie data={graphData} />}</div>
      <button onClick={onSend}>Display Expenses</button>
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default ExpenseVisual;
