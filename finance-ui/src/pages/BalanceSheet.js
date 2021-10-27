import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryTable from '../components/CategoryTable.js'


function BalanceSheet({setCategoryToEdit}) {
    
    const [categories, setCategories] = useState([]);
    const history = useHistory()
    
    const onDelete = async _id => {
        const response = await fetch(`/categories/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            setCategories(categories.filter(e => e._id !== _id));
        }else {
            console.error(`Failed to delete line item with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = category => {
        setCategoryToEdit(category);
        history.push("/EditCategory");
    };

    const loadCategories = async () => {
        const response = await fetch('/categories');
        const data = await response.json();
        setCategories(data);
    };
        
    useEffect(() => {
        loadCategories();
    }, []);

    
    return (
        <div>
            <h1>Finances by Category</h1>
            <CategoryTable categories={categories} onDelete={onDelete} onEdit={onEdit}></CategoryTable>
            <Link to='/AddCategory'>Add Category</Link><br/>
            <Link to='/'>Return to Home</Link>
        </div>
    )
}

export default BalanceSheet