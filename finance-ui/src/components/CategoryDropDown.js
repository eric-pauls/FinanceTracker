import React from "react";
import { useState, useEffect, useCallback } from "react";


function DropDown({category, onCategoryChange}) {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryChange = useCallback(
    event => {
      onCategoryChange(event.target.value)
    },
    [onCategoryChange]
  );

  const check = () => {
    if (categories !== null) {
      return categories.map((category) => (
        <option value={category.category}>{category.category}</option>
      ));
    }
  };

  return (
    <div>
      <label for="category">Category</label>
      <select onChange={handleCategoryChange} val={category}>
        <option value="">--Please choose an option--</option>
        {check()}
      </select>
    </div>
  );
}

export default DropDown;
