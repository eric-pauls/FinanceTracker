import React from 'react';
import { Link } from 'react-router-dom';

function ExpenseVisual () {
    return(
        <div>
                <h1>My Expenses</h1>
                <Link to="/">Return to Home</Link>
        </div>
    )
}

export default ExpenseVisual