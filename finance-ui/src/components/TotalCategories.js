import React from 'react';
import { useState, useEffect } from 'react';

const TotalCategories = async (category) => {
    const [entries, setEntries] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8080/lineItems').then(response => response.json()).then(data => setEntries(data));
    }, []);

    // let sum = 0
    // for (const lineItem in entries) {
    //     if (entries[lineItem]['category'] === category) {
    //         sum += entries[lineItem]['amount']
    //     }
    // }

    console.log(entries);
    
    return <h1>hello</h1>;

}

export default TotalCategories