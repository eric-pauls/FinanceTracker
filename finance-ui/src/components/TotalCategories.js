import React from 'react';
import { useState, useEffect } from 'react';

function TotalCategories (category) {
    const total = useState(0)

    const loadLineItems = async () => {
        const response = await fetch('/LineItems');
        const data = await response.json();

    }

    useEffect(() => {
        loadLineItems();
    }, []);

    return (
        <h1>hello</h1>
    )
}

export default TotalCategories