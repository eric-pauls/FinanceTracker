import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LineItemTable from '../components/LineItemTable.js'

function AllLineItems({setLineItemToEdit}) {

    const [lineItems, setLineItems] = useState([]);
    const history = useHistory()

    const onDelete = async _id => {
        const response = await fetch(`/lineItems/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            setLineItems(lineItems.filter(e => e._id !== _id));
        }else {
            console.error(`Failed to delete line item with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = lineItem => {
        setLineItemToEdit(lineItem);
        history.push("/EditLineItem");
    };

    const loadLineItems = async () => {
        const response = await fetch('/lineItems');
        const data = await response.json();
        setLineItems(data);
    };
        
    useEffect(() => {
        loadLineItems();
    }, []);

    return (
        <div>
            <h1>All My Line Items</h1>
            <LineItemTable lineItems={lineItems} onDelete={onDelete} onEdit={onEdit}></LineItemTable>
            <Link to='/AddLineItem'>Add Line Item</Link><br/>
            <Link to='/'>Return to Home</Link>
        </div>
    )
}

export default AllLineItems