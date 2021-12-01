import React from "react";
import { useState, useEffect, useCallback } from "react";

function Exclude ({categories, onCategoriesChange}) {

    const handleCategoriesChange = useCallback(
        event => {
          onCategoriesChange(event.target.value)
        },
        [onCategoriesChange]
      );


    return (
        <div> 
            <label>Choose Categories to Compare</label>
            <checkbox> </checkbox>
        </div>
    )
}

export default Exclude;