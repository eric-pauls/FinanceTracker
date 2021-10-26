import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>My Finances</h1>
            <Link to="/BalanceSheet">View Finances By Catergory</Link>
            <Link to="/AllLineItems">View All Line Items</Link>
        </div>
    )
}

export default HomePage
