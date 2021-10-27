import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>My Finances</h1>
            <Link to="/BalanceSheet">View Finances By Catergory</Link><br/>
            <Link to="/AllLineItems">View All Line Items</Link><br/>
            <Link to="/ExpenseVisual">Visualization of My Expenses</Link>
        </div>
    )
}

export default HomePage
